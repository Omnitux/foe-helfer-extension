/*
 * **************************************************************************************
 *
 * Dateiname:                 guildfights.js
 * Projekt:                   foe-chrome
 *
 * erstellt von:              Daniel Siekiera <daniel.siekiera@gmail.com>
 * erstellt am:	              22.12.19, 14:31 Uhr
 * zuletzt bearbeitet:       22.12.19, 14:31 Uhr
 *
 * Copyright © 2019
 *
 * **************************************************************************************
 */

// Provinznamen der GG
FoEproxy.addMetaHandler('guild_battleground_maps', (xhr, postData) => {
	GildFights.ProvinceNames = JSON.parse(xhr.responseText);
});

// Provinzfarben der GG
FoEproxy.addMetaHandler('battleground_colour', (xhr, postData) => {
	GildFights.Colors = JSON.parse(xhr.responseText);
});

// Gildengefechte - Snapshot
FoEproxy.addHandler('GuildBattlegroundService', 'getPlayerLeaderboard', (data, postData) => {
	// immer zwei vorhalten, für Referenz Daten (LiveUpdate)
	if(localStorage.getItem('GildFights.NewAction') !== null){
		GildFights.PrevAction = JSON.parse(localStorage.getItem('GildFights.NewAction'));
		GildFights.PrevActionTimestamp = parseInt(localStorage.getItem('GildFights.NewActionTimestamp'));
	}
	else if(GildFights.NewAction !== null){
		GildFights.PrevAction = GildFights.NewAction;
		GildFights.PrevActionTimestamp = GildFights.NewActionTimestamp;
	}

	GildFights.NewAction = data['responseData'];
	localStorage.setItem('GildFights.NewAction', JSON.stringify(GildFights.NewAction));

	GildFights.NewActionTimestamp = moment().unix();
	localStorage.setItem('GildFights.NewActionTimestamp', GildFights.NewActionTimestamp);

	if( $('#GildPlayers').length > 0 ){
		GildFights.BuildPlayerContent();
	} else {
		GildFights.ShowPlayerBox();
	}
});


// Gildengefechte - Map, Gilden
FoEproxy.addHandler('GuildBattlegroundService', 'getBattleground', (data, postData) => {
	GildFights.init();
	GildFights.MapData = data['responseData'];
});


let GildFights = {

	PrevAction: null,
	PrevActionTimestamp: null,
	NewAction: null,
	NewActionTimestamp: null,
	MapData: null,
	PlayersPortraits: null,
	Colors : null,
	SortedColors: null,
	ProvinceNames : null,
	InjectionLoaded: false,


	init: ()=> {

		if(GildFights.InjectionLoaded === false){
			FoEproxy.addWsHandler('GuildBattlegroundService', 'all', data => {
				if ($('#LiveGildFighting').length > 0) {

					if(data.responseData[0] !== undefined){
						// console.log('msg', data.responseData[0]);
						GildFights.RefreshTable(data.responseData[0]);
					}
				}
			});

			GildFights.InjectionLoaded = true;
		}
	},


	ShowGildBox: ()=> {
		// Wenn die Box noch nicht da ist, neu erzeugen und in den DOM packen
		if( $('#LiveGildFighting').length === 0 ){

			HTML.Box({
				id: 'LiveGildFighting',
				title: 'Live Gefechte',
				auto_close: true,
				dragdrop: true,
				resize: true,
				minimize: true
			});

			// CSS in den DOM prügeln
			HTML.AddCssFile('guildfights');
		}

		GildFights.BuildFightContent();
	},


	ShowPlayerBox: () => {
		// Wenn die Box noch nicht da ist, neu erzeugen und in den DOM packen
		if( $('#GildPlayers').length === 0 ){

			moment.locale(MainParser.Language);

			HTML.Box({
				id: 'GildPlayers',
				title: 'Spieler Übersicht',
				auto_close: true,
				dragdrop: true,
				resize: true,
				minimize: true,
				saveCords: false
			});

			// CSS in den DOM prügeln
			HTML.AddCssFile('guildfights');
		}

		GildFights.BuildPlayerContent();
	},


	BuildPlayerContent: ()=> {
		let t = [];

		t.push('<table class="foe-table">');

		t.push('<thead>');
		t.push('<tr>');

		t.push('<th>&nbsp;</th>');
		t.push('<th>Spieler</th>');
		t.push('<th class="text-center">Verhandlungen</th>');
		t.push('<th class="text-center">Kämpfe</th>');

		t.push('</tr>');
		t.push('</thead>');

		t.push('<tbody>');

		for(let i in GildFights.NewAction)
		{
			if(!GildFights.NewAction.hasOwnProperty(i)){
				break;
			}

			let p = GildFights.NewAction[i];

			let fightAddOn = '',
				negotaionAddOn = '',
				change = false;

			if(GildFights.PrevAction !== null){

				if(GildFights.PrevAction[i]['negotiationsWon'] < p['negotiationsWon']){
					negotaionAddOn = ' <small class="text-success">&#8593; ' + (p['negotiationsWon'] - GildFights.PrevAction[i]['negotiationsWon']) + '</small>';
					change = true;
				}

				if(GildFights.PrevAction[i]['battlesWon'] < p['battlesWon']){
					fightAddOn = ' <small class="text-success">&#8593; ' + (p['battlesWon'] - GildFights.PrevAction[i]['battlesWon']) + '</small>';
					change = true;
				}
			}

			t.push('<tr' + (change === true ? ' class="bg-green"' : '') + '>');
			// ToDo: bg-green anlegen (leicht transparenter Hintergrund)
			t.push('<td>');
			t.push('<img src="https://foede.innogamescdn.com/assets/shared/avatars/' + MainParser.PlayerPortraits[ p['player']['avatar'] ] + '.jpg" alt="">');
			// t.push(p['player']['avatar']);
			t.push('</td>');

			t.push('<td>');
			t.push(p['player']['name']);
			t.push('</td>');



			t.push('<td class="text-center">');
			t.push((p['negotiationsWon'] || 0) + negotaionAddOn);
			t.push('</td>');

			t.push('<td class="text-center">');
			t.push((p['battlesWon'] || 0) + fightAddOn);
			t.push('</td>');

			t.push('</tr>');
		}

		t.push('</tbody>');

		$('#GildPlayersBody').html( t.join('') );

		if( $('#GildPlayersHeader .title').find('.time-diff').length === 0 )
		{
			$('#GildPlayersHeader .title').append( $('<small />').addClass('time-diff') );
		}

		// es gibt schon einen Snapshot vorher
		if (GildFights.PrevActionTimestamp !== null){

			let start = moment.unix(GildFights.PrevActionTimestamp),
				end = moment.unix(GildFights.NewActionTimestamp),
				duration = moment.duration(end.diff(start));

			let time = duration.humanize();

			$('.time-diff').text(' - letzter Snapshot vor ' + time );
		}
	},


	PrepareColors: ()=> {

		// ist schon fertig aufbereitet
		if(GildFights.SortedColors !== null){
			return;
		}

		let colors = [],
			bP = GildFights.MapData['battlegroundParticipants'];

		for(let i in bP)
		{
			if(!bP.hasOwnProperty(i))
			{
				break;
			}

			let c = null;

			// "weiße" Farbe für den eigenen Clan raussuchen
			if(bP[i]['clan']['id'] === ExtGuildID){
				c = GildFights.Colors.find(o => (o['id'] === 'own_guild_colour'));
			} else {
				c = GildFights.Colors.find(o => (o['id'] === bP[i]['colour']));
			}

			colors[bP[i]['participantId']] = {
				base: c['base'],
				main: c['mainColour']
			};
		}

		GildFights.SortedColors = colors;
	},


	BuildFightContent: () => {

		GildFights.PrepareColors();

		let t = [],
			mP = GildFights.MapData['map']['provinces'],
			bP = GildFights.MapData['battlegroundParticipants'],
			cnt = 0;

		t.push('<table class="foe-table">');

		t.push('<thead>');

		t.push('<th>&nbsp;</th>');

		for(let x in bP)
		{
			if(!bP.hasOwnProperty(x)){
				break;
			}

			t.push('<th>' + bP[x]['clan']['name'] + '<span class="head-color" style="background-color:' + GildFights.SortedColors[bP[x]['participantId']]['main'] + '"></span></th>');
		}



		t.push('</thead>');

		t.push('<tbody>');

		for(let i in mP)
		{
			if(!mP.hasOwnProperty(i)){
				break;
			}

			let prov;

			if(cnt === 0){
				prov = GildFights.ProvinceNames[0]['provinces'][0];
			} else {
				prov = GildFights.ProvinceNames[0]['provinces'].find(o => (o['id'] === cnt));
			}

			t.push('<tr data-id="' + cnt + '">');

			t.push('<td>');
			t.push(prov['name']);
			t.push('</td>');

			for(let x = 0; x < bP.length; x++)
			{
				if(mP[i]['ownerId'] !== undefined && bP[x]['participantId'] === mP[i]['ownerId']){

					let bonus = mP[i]['victoryPointsBonus'] !== undefined ? ' <small class="text-success">+' + mP[i]['victoryPointsBonus'] + '</small>' : '';

					t.push('<td data-field="' + cnt + '-' + mP[i]['ownerId'] + '" class="text-center">');
					t.push('Sp: ' + mP[i]['victoryPoints'] + bonus);

					if(mP[i]['conquestProgress'].length > 0){
						let cP = mP[i]['conquestProgress'];

						for(let y in cP)
						{
							if(!cP.hasOwnProperty(y)){
								break;
							}

							let p = GildFights.MapData['battlegroundParticipants'].find(o => (o['participantId'] === cP[y]['participantId']));
							t.push('<span class="attack attacker-' + cP[y]['participantId'] + '"><span style="background-color:'+ GildFights.SortedColors[p['participantId']]['main'] +';width:' + cP[y]['progress'] + '%"></span></span>');
						}
					}

					t.push('</td>');

				} else {
					t.push('<td class="">');
					t.push('&nbsp;');
					t.push('</td>');
				}
			}

			t.push('</tr>');

			cnt++;
		}

		t.push('</tbody>');

		t.push('<table>');

		$('#LiveGildFightingBody').html( t.join('') );
	},


	RefreshTable: (data)=> {

		// Provinz wurde übernommen
		if(data['lockedUntil'] !== undefined)
		{
			$('[data-id="' + data['id'] + '"]').find('td').each(function(){
				$(this).html('');
			});

			$('[data-field="' + data['id'] + '-' + data['ownerId'] + '"]').text('Sp: ' + data['victoryPoints']);

			return;
		}

		// Es wird gerade gekämpft
		for(let i in data['conquestProgress'])
		{
			if(!data['conquestProgress'].hasOwnProperty(i)){
				break;
			}

			let d = data['conquestProgress'][i],
				cell = $('[data-field="' + data['id'] + '-' + data['ownerId'] + '"]'),
				p = GildFights.MapData['battlegroundParticipants'].find(o => (o['participantId'] === d['participantId']));

			// Angreifer gibt es schon
			if( cell.find('.attacker-' + d['participantId']).length > 0 ){
				// nur die Prozente updaten
				cell.find('.attacker-' + d['participantId']).children().css({'width': d['progress'] + '%'});
			}
			// neuen "Balken" einfügen
			else {
				cell.append($('<span class="attack attacker-' + d['participantId'] + '"><span style="background-color:'+ GildFights.SortedColors[p['participantId']]['main'] +';width:' + d['progress'] + '%"></span></span>'));
			}

			cell.addClass('red-pulse');

			// nach 1s die Klasse wieder entfernen
			setTimeout(() =>  {
				cell.removeClass('red-pulse');
			}, 1000);
		}
	}
};
