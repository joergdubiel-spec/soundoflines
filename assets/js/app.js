

function trackClick(path, title){
  try{
    if(window.goatcounter && typeof window.goatcounter.count === 'function'){
      window.goatcounter.count({
        path: path,
        title: title || path
      });
    }
  }catch(e){}
}

function toggleSection(id){
  const el=document.getElementById(id);
  if(!el) return;
  const willOpen = !el.classList.contains('active');
  el.classList.toggle('active');
  if(willOpen){
    const names = {'sol-panel':'Sound of Lines','rew-panel':'Rewind'};
    const label = names[id] || id;
    trackClick('open/section/' + label, 'Open section ' + label);
  }
}
function archiveBack(id){
  const el=document.getElementById(id);
  if(el) el.classList.remove('active');
  const grid=document.querySelector('#group-depeche-archive .dl-archive-category-grid');
  if(grid){ grid.scrollIntoView({behavior:'smooth',block:'start'}); }
}
function toggleBlock(id){
  const el=document.getElementById(id);
  if(!el) return;
  const willOpen = !el.classList.contains('active');

  if(willOpen && el.classList.contains('dl-archive-openarea')){
    document.querySelectorAll('#group-depeche-archive .dl-archive-openarea.active').forEach(function(openEl){
      if(openEl.id !== id){ openEl.classList.remove('active'); }
    });
  }

  el.classList.toggle('active');

  if(willOpen){
    const names = {
      'block-velvet':'The Velvet Echoes',
      'block-echoheart':'Echoheart',
      'group-echoheart-studio':'Echoheart Studio',
      'group-echoheart-live':'Echoheart Live',
      'block-nightpulse':'Nightpulse',
      'block-naylah':'NAYLAH',
      'block-country':'Cole Rivers & Savannah Lane',
      'group-country-duette':'Cole Rivers & Savannah Lane - Duette',
      'group-country-savannah':'Savannah Lane',
      'group-country-cole':'Cole Rivers',
      'block-ritmo':'Ritmo del Alma',
      'block-celtic':'Celtic Whisper',
      'block-ravens':'Ravens Cry',
      'block-ethan':'Ethan Vale',
      'block-depeche':'Depeche Lord',
      'block-luna':'Luna Ray',
      'block-jason':'Jason Hartley',
      'group-depeche-band':'Depeche Lord - The Band',
      'group-depeche-origin':'Depeche Lord - Origin Story',
      'group-depeche-interviews':'Depeche Lord - Interviews',
      'group-depeche-behind':'Depeche Lord - Behind the Songs',
      'group-depeche-staff':'Depeche Lord - Staff & Umfeld',
      'group-depeche-archive':'Depeche Lord - Archive Gallery',
      'group-depeche-archive-studio':'Depeche Lord - Archive Studio',
      'group-depeche-archive-tour':'Depeche Lord - Archive Tour',
      'group-depeche-archive-early':'Depeche Lord - Archive Early Days',
      'group-depeche-archive-press':'Depeche Lord - Archive Press'
    };
    const label = names[id] || id;
    trackClick('open/block/' + label, 'Open block ' + label);
  }
}

// The legacy hash jump was removed. The Depeche Lord section is moved into
// the new layout later in this file, so scrolling before that move produced an
// incorrect landing position on phones.



function toggleBlock(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.style.display = (el.style.display === 'block') ? 'none' : 'block';
}




(function(){
  const ARTISTS=[{"id": "luna", "name": "Luna Ray", "channel": "Rewind", "group": "Synthpop", "genre": "Synthpop · 80s Pop", "image": "assets/images/asset-029.webp", "song": "Luna Ray – More Than Feelings", "video": "axCOSKoe5Q8", "playlist": "https://youtube.com/playlist?list=PLnKwEtxwRsgwNRecuk0WKL_1_sWCQOP5M&si=Rm3dQMQzv_d7Wq_p"}, {"id": "jason", "name": "Jason Hartley", "channel": "Rewind", "group": "Rockballaden", "genre": "80s Rock · Rockballaden", "image": "assets/images/asset-030.webp", "song": "Jason Hartley – Across the Years", "video": "F0pLiGGE9r0", "playlist": "https://youtube.com/playlist?list=PLnKwEtxwRsgxAj3uXiN1cp48Uje_nCzKP&si=Tn1MVRxyKLIpmDEB"}, {"id": "ravens", "name": "Ravens Cry", "channel": "Sound of Lines", "group": "Dark & Rock", "genre": "Dark Rock · Gothic Rock", "image": "assets/images/asset-031.webp", "song": "Ravens Cry – Devil’s Desire", "video": "VwjcayIEBS0", "playlist": "https://www.youtube.com/playlist?list=PLzZh-HEooTFe_-g-64dr5UFz9GkZk_z8o"}, {"id": "echoheart", "name": "Echoheart", "channel": "Sound of Lines", "group": "Dark & Rock", "genre": "Rockballaden · Soft Rock", "image": "assets/images/asset-032.webp", "song": "Echoheart – Beyond the Walls", "video": "oLUZpp282Gs", "playlists": [["Mehr von Echoheart", "https://www.youtube.com/playlist?list=PLzZh-HEooTFf7GuTvuRf4xLXlDPzuLo5a"], ["Weitere Echoheart-Videos", "https://www.youtube.com/playlist?list=PLzZh-HEooTFeZgHfpmaW5ugZaNYoNDsr0"]]}, {"id": "nightpulse", "name": "Nightpulse", "channel": "Sound of Lines", "group": "Electronic & Modern", "genre": "Electronic · Deep House", "image": "assets/images/asset-033.webp", "song": "Nightpulse – Forever Tonight", "video": "kqD-pFAD64k", "playlist": "https://www.youtube.com/playlist?list=PLzZh-HEooTFcOwfMmHHmjtYiuFF3uw1JZ"}, {"id": "naylah", "name": "NAYLAH", "channel": "Sound of Lines", "group": "Electronic & Modern", "genre": "Pop · Dance · R&B", "image": "assets/images/asset-034.webp", "song": "NAYLAH feat. Ethan Vale – Just A Heartbeat Away", "video": "u6qSSdzRILc", "playlist": "https://www.youtube.com/playlist?list=PLzZh-HEooTFe3O5o2R9cpj2oqyk01u6kW"}, {"id": "ethan", "name": "Ethan Vale", "channel": "Sound of Lines", "group": "Electronic & Modern", "genre": "Pop Ballads · Singer-Songwriter", "image": "assets/images/asset-035.webp", "song": "Ethan Vale – Still Alive", "video": "78AmVNb85Nk", "playlist": "https://www.youtube.com/playlist?list=PLzZh-HEooTFcTWSzX8_GoyRAr0bDqp1eB"}, {"id": "savannah-cole", "name": "Savannah Lane & Cole Rivers", "channel": "Sound of Lines", "group": "Country & Acoustic", "genre": "Country · Acoustic · Duets", "image": "assets/images/asset-036.webp", "song": "Cole Rivers & Savannah Lane – Forever By Your Side", "video": "CooWdDwCvJk", "playlist": "https://www.youtube.com/playlist?list=PLzZh-HEooTFcXTCbCzyhtZR18SA4YNh_L"}, {"id": "celtic", "name": "Celtic Whisper", "channel": "Sound of Lines", "group": "World & Tradition", "genre": "Celtic · Folk · Fantasy", "image": "assets/images/asset-037.webp", "song": "Celtic Whisper – Rise To Avalon", "video": "0bE8p-JTiDI", "playlist": "https://www.youtube.com/playlist?list=PLzZh-HEooTFf_wSRFBAmB8rx0Up79Q3Ov"}, {"id": "ritmo", "name": "Ritmo del Alma", "channel": "Sound of Lines", "group": "World & Tradition", "genre": "Latin Pop · Acoustic · Dance", "image": "assets/images/asset-038.webp", "song": "Ritmo del Alma – Al Ritmo de tu Fuego", "video": "tn6P0gahPls", "playlist": "https://www.youtube.com/playlist?list=PLzZh-HEooTFfk4FyfKw8qPqa-KJTzJu7u"}, {"id": "velvet", "name": "The Velvet Echoes", "channel": "Sound of Lines", "group": "Retro", "genre": "60s Beat · Retro Pop", "image": "assets/images/asset-039.webp", "song": "The Velvet Echoes – When You Look At Me", "video": "zCOW8zDAAJ4", "playlist": "https://www.youtube.com/playlist?list=PLzZh-HEooTFcueSq9spoqbTxL80pTRI_N"}];
  const STUDIO_ROOMS=[{"id":"empfang","number":"01","name":"Empfang / Lobby","short":"Ankommen und orientieren","zone":"Ankommen","image":"assets/images/pear-studios/01-empfang-lobby.webp","text":"Der erste Anlaufpunkt für Gäste, Künstler und Geschäftspartner. Empfangstresen, Wartebereich und Auszeichnungen vermitteln sofort, dass Pear Studios zugleich Arbeitsort und sichtbares Zentrum der Bandwelt ist."},{"id":"hauptgang","number":"02","name":"Hauptgang","short":"Die zentrale Verbindung","zone":"Ankommen","image":"assets/images/pear-studios/02-hauptgang.webp","text":"Der Hauptgang verbindet Verwaltung, Aufenthaltsbereiche und die eigentlichen Produktionsräume. Als wiederkehrender Schauplatz eignet er sich für Ankünfte, kurze Gespräche, Wege zwischen Sessions und ruhige Übergangsszenen."},{"id":"management","number":"03","name":"Management Office","short":"Planung, Verträge und Touren","zone":"Management & Media","image":"assets/images/pear-studios/03-management-office.webp","text":"Hier laufen Terminplanung, Verträge, Tourlogistik und größere Entscheidungen zusammen. Der Raum ist professionell und repräsentativ, bleibt aber klar als Teil eines Musikstudios erkennbar."},{"id":"emma-pr","number":"04","name":"Emma Hollis’ PR Office","short":"Presse und öffentliche Kommunikation","zone":"Management & Media","image":"assets/images/pear-studios/04-emma-hollis-pr-office.webp","text":"Emma Hollis koordiniert hier Presseanfragen, Veröffentlichungen, Interviews und Krisenkommunikation. Künstlerbilder, Medienunterlagen und Arbeitsflächen zeigen einen aktiven PR-Arbeitsplatz statt eines austauschbaren Büros."},{"id":"media-room","number":"05","name":"PR & Media Meeting Room","short":"Briefings, Interviews und Kampagnen","zone":"Management & Media","image":"assets/images/pear-studios/05-pr-media-meeting-room.webp","text":"Der Besprechungsraum dient für Medienbriefings, Interviewvorbereitungen, Kampagnenplanung und Videoanrufe. Er schafft einen neutralen, kontrollierten Rahmen, wenn mehrere Personen gemeinsam arbeiten müssen."},{"id":"lounge","number":"06","name":"Lounge / Aufenthaltsraum","short":"Pause ohne Konferenztisch","zone":"Alltag im Studio","image":"assets/images/pear-studios/06-lounge.webp","text":"Die Lounge ist der informelle Mittelpunkt zwischen langen Sessions. Hier entstehen Pausen, private Gespräche, spontane Ideen und jene Momente, in denen die Band nicht auf einer Bühne oder vor einem Mikrofon funktionieren muss."},{"id":"kueche","number":"07","name":"Küche","short":"Kaffee, Essen und lange Nächte","zone":"Alltag im Studio","image":"assets/images/pear-studios/07-kueche.webp","text":"Die Studioküche versorgt kurze Pausen ebenso wie nächtliche Produktionen. Sie ist bewusst funktional gehalten und eignet sich für alltägliche Szenen, die den Studiobetrieb glaubwürdig und bewohnt wirken lassen."},{"id":"control-room","number":"08","name":"Hauptregie / Control Room","short":"Aufnahme, Mischung und Entscheidungen","zone":"Aufnahme & Probe","image":"assets/images/pear-studios/08-control-room.webp","text":"Das technische und kreative Zentrum der Aufnahmen. An Mischkonsole, Monitoren und Racks bewertet Terry McGuirray Takes, Klangbalance und Produktion – während durch das Sichtfenster der Live Room erreichbar bleibt."},{"id":"live-room","number":"09","name":"Großer Aufnahmeraum / Live Room","short":"Band, Streicher und große Sessions","zone":"Aufnahme & Probe","image":"assets/images/pear-studios/09-live-room.webp","text":"Der große Aufnahmeraum ist für komplette Bandtakes, akustische Instrumente, Streicher und aufwendigere Sessions ausgelegt. Seine Größe erlaubt flexible Aufbauten, ohne den Raum wie eine Konzertbühne wirken zu lassen."},{"id":"vocal-booth","number":"10","name":"Vocal Booth","short":"Nah, kontrolliert und abgeschirmt","zone":"Aufnahme & Probe","image":"assets/images/pear-studios/10-vocal-booth.webp","text":"Die Gesangskabine ermöglicht kontrollierte, intime Aufnahmen ohne störende Raumanteile. Mikrofon, Notenpult, Kopfhörer und Sichtkontakt zur Regie bilden das feste Setup für Lead Vocals, zusätzliche Takes und gesprochene Passagen."},{"id":"proberaum","number":"11","name":"Band-Proberaum","short":"Arrangements vor der Aufnahme","zone":"Aufnahme & Probe","image":"assets/images/pear-studios/11-band-proberaum.webp","text":"Hier arbeitet die komplette Band an Übergängen, Dynamik und Live-Arrangements, bevor eine Aufnahme oder Tour beginnt. Instrumente und Monitore bleiben dauerhaft einsatzbereit, ohne dass der Raum zur überladenen Bühne wird."},{"id":"terry-technik","number":"12","name":"Terrys Technikraum","short":"Reparieren, prüfen und verkabeln","zone":"Technik & Lager","image":"assets/images/pear-studios/12-terrys-technikraum.webp","text":"Terrys eigener Arbeitsraum für Wartung, Reparaturen, Kalibrierung und Signalwege. Werkzeuge, Messgeräte, Patchfelder und Ersatzteile machen ihn zum glaubwürdigen technischen Rückgrat des Studios."},{"id":"equipment","number":"13","name":"Instrumentenlager / Equipment Room","short":"Geordnetes Material für jede Session","zone":"Technik & Lager","image":"assets/images/pear-studios/13-equipment-room.webp","text":"Instrumente, Verstärker, Keyboards, Mikrofonständer, Kabel und Flightcases werden hier griffbereit gelagert. Der Raum zeigt die praktische Infrastruktur hinter Aufnahmen, Proben und Tourvorbereitungen."}];
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  function setButtons(id,open){
    document.querySelectorAll('[onclick*="\''+id+'\'"]').forEach(function(btn){
      if(btn.classList.contains('back-btn')) return;
      btn.textContent=open?'Schließen':'Öffnen';
    });
  }
  window.toggleBlock=function(id){
    const el=document.getElementById(id); if(!el) return;
    if(id==='impressum'||id==='kontakt'){ el.style.display=(getComputedStyle(el).display==='none')?'block':'none'; return; }
    const open=!el.classList.contains('active');
    if(open && el.classList.contains('group-videos') && el.closest('#block-depeche')){
      el.closest('#block-depeche').querySelectorAll(':scope > .subgroups > .subgroup > .group-videos.active').forEach(function(other){
        if(other!==el){other.classList.remove('active');setButtons(other.id,false);}
      });
    }
    if(open && el.classList.contains('dl-archive-openarea')){
      el.parentElement.querySelectorAll('.dl-archive-openarea.active').forEach(function(other){if(other!==el){other.classList.remove('active');setButtons(other.id,false);}});
    }
    el.classList.toggle('active',open); setButtons(id,open);
    if(open) setTimeout(function(){el.scrollIntoView({behavior:'smooth',block:'start'});},60);
  };
  window.toggleSection=function(id){ showView(id==='rew-panel'?'view-depeche':'view-artists'); };
  function showView(id){
    document.querySelectorAll('.main-view').forEach(v=>v.classList.toggle('active',v.id===id));
    document.querySelectorAll('[data-main-view]').forEach(b=>b.classList.toggle('active',b.dataset.mainView===id));
    const target=document.getElementById(id); if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function openDlGroup(id,button){
    const target=document.getElementById(id); if(!target) return;
    document.querySelectorAll('#block-depeche > .subgroups > .subgroup > .group-videos.active').forEach(function(el){if(el!==target){el.classList.remove('active');setButtons(el.id,false);}});
    target.classList.add('active'); setButtons(id,true);
    document.querySelectorAll('.dl-quick-nav button').forEach(b=>b.classList.toggle('active',b===button));
    setTimeout(()=>target.scrollIntoView({behavior:'smooth',block:'start'}),40);
  }
  function setGroupLabel(id,label){
    const group=document.getElementById(id); if(!group) return;
    const subgroup=group.closest('.subgroup'); if(!subgroup) return;
    const h=subgroup.querySelector('.subgroup-head h4'); if(h) h.textContent=label;
  }
  function addEditorialGroup(block,id,label){
    let group=document.getElementById(id); if(group) return group;
    const subgroups=block.querySelector(':scope > .subgroups'); if(!subgroups) return null;
    const wrap=document.createElement('div');wrap.className='subgroup';
    wrap.innerHTML='<div class="subgroup-head"><h4>'+label+'</h4><button class="open-btn subgroup-btn" type="button">Öffnen</button></div><div class="group-videos" id="'+id+'"></div>';
    const btn=wrap.querySelector('button');btn.onclick=function(){openDlGroup(id,document.querySelector('.dl-quick-nav button[data-target="'+id+'"]'));};
    subgroups.appendChild(wrap);return wrap.querySelector('.group-videos');
  }
  function buildDlHero(dl){
    if(dl.querySelector('.dl-main-hero')) return;
    const block=dl.querySelector('#block-depeche'); if(!block) return;
    const hero=document.createElement('section');hero.className='dl-main-hero';
    hero.innerHTML='<img src="assets/images/asset-040.webp" alt="Depeche Lord – Eliot Reeves, David McLean, Brian Rix und Dylan Cole in Pear Studios"><div class="dl-hero-copy"><p class="dl-hero-kicker">MAIN ACT · REWIND</p><h2>DEPECHE LORD</h2><p>Vier unterschiedliche Rollen. Ein gemeinsames Zentrum. Dark emotional synthpop zwischen menschlicher Verletzlichkeit, mechanischer Präzision und Texten, die keine fertigen Antworten liefern.</p></div>';
    dl.insertBefore(hero,block);
    const feature=document.createElement('section');feature.className='dl-feature-song';
    feature.innerHTML='<a href="https://youtu.be/ggt7AgfNmyU" target="_blank" rel="noopener noreferrer"><img src="https://img.youtube.com/vi/ggt7AgfNmyU/hqdefault.jpg" alt="Empfohlener Song von Depeche Lord"></a><div class="copy"><span>Song-Empfehlung</span><h3>Empfohlener Song von Depeche Lord</h3><p>Der direkte Einstieg in die Welt der Band. Alle weiteren Studio-, Live- und Tourtitel bleiben über die Trackübersicht und die vollständige Playlist erreichbar.</p><div class="dl-hero-actions"><a href="https://youtu.be/ggt7AgfNmyU" target="_blank" rel="noopener noreferrer">Auf YouTube ansehen</a><a class="secondary" href="https://youtube.com/playlist?list=PLnKwEtxwRsgyNjmycN4ABzqvWsZLBDYOv" target="_blank" rel="noopener noreferrer">Alle Titel</a></div></div>';
    dl.insertBefore(feature,block);
  }
  function buildEditorialContent(dl){
    const block=dl.querySelector('#block-depeche'); if(!block) return;
    const origin=document.getElementById('group-depeche-origin');
    const interviews=document.getElementById('group-depeche-interviews');
    const studio=document.getElementById('group-depeche-behind');
    const staff=document.getElementById('group-depeche-staff');
    const statements=addEditorialGroup(block,'group-depeche-statements','Statements');
    const offrecord=addEditorialGroup(block,'group-depeche-offrecord','Off the Record');
    setGroupLabel('group-depeche-origin','Die Geschichte');
    setGroupLabel('group-depeche-interviews','Interviews');
    setGroupLabel('group-depeche-behind','Studio Stories');
    setGroupLabel('group-depeche-staff','Pear Studios & Team');
    if(origin) origin.innerHTML=`<div class="editorial-intro">Depeche Lord beginnt nicht im Sandkasten und nicht mit der üblichen Geschichte vom Schulchor. Die Erzählung setzt dort ein, wo die Band bereits existiert – arm an Mitteln, aber reich an Willen, Hoffnung und Songs.</div><div class="timeline">
      <div class="timeline-step"><div class="timeline-number">1</div><div class="timeline-copy"><h5>Es gab sie einfach</h5><p>Vier Musiker mit unterschiedlichen Fähigkeiten versuchten, gemeinsam einen Klang zu finden. Beim ersten Zusammenspiel lagen sie auf völlig verschiedenen Stufen. Sie trafen sich zunächst auf der Fünf – und arbeiteten von dort aus weiter.</p></div></div>
      <div class="timeline-step"><div class="timeline-number">2</div><div class="timeline-copy"><h5>Drei Betrunkene und ein Festival</h5><p>Ein kleiner Auftritt in einer Bar, drei betrunkene Stammgäste und ein Fremder, der kurzfristig Ersatz für eine ausgefallene Band suchte. Am nächsten Tag standen Depeche Lord auf einem Festival in Tijuana.</p></div></div>
      <div class="timeline-step"><div class="timeline-number">3</div><div class="timeline-copy"><h5>Der alte Transporter</h5><p>Keine Heizung, Regen, Straßengraben und fünf Pfund, die sie nicht hatten. Ein Geschäftsmann fuhr weiter; ein altes Pferdefuhrwerk zog sie heraus. Für David wurde daraus eine Erinnerung daran, dass Geld und Charakter nicht dasselbe sind.</p></div></div>
      <div class="timeline-step"><div class="timeline-number">4</div><div class="timeline-copy"><h5>Pear Studios</h5><p>Aus Proben, Demos und Fehlversuchen entstand ein eigener Klang: Eliots emotionale Linie, Davids Klangarchitektur, Dylans organische Texturen und Brians kontrollierter Puls.</p></div></div>
      <div class="timeline-step"><div class="timeline-number">5</div><div class="timeline-copy"><h5>Plötzlich Everybody’s Darling</h5><p>Nach den ersten Erfolgen liebten sie plötzlich Menschen, die sie wenige Wochen zuvor nicht kannten. Management und Strukturen wurden notwendig – ohne dass die Band ihre Freiheit oder ihre Haltung verkaufen wollte.</p></div></div>
      <div class="timeline-step"><div class="timeline-number">6</div><div class="timeline-copy"><h5>Die Weltbühnen</h5><p>Große Arenen und internationale Tourneen änderten den Maßstab, aber nicht den Kern: keine protzigen Autos, keine Goldketten, keine künstlichen Allüren. Die Musik blieb das Zentrum.</p></div></div>
    </div>`;
    if(interviews) interviews.innerHTML=`<div class="editorial-intro">Die Gespräche stammen aus einem festen fiktiven Medienuniversum. Ein Klick öffnet die jeweilige redaktionell verdichtete Fassung.</div><div class="interview-list">
      ${interview('Rolling Glass · London, Frühjahr 2026','Wir waren nie dafür gemacht, Everybody’s Darling zu sein',`<p><strong>Rolling Glass:</strong> Nach den ersten Erfolgen wurden Sie plötzlich von allen geliebt.</p><p><strong>Eliot:</strong> Wochen vorher wollte uns keiner kennen. Dann waren wir Everybody’s Darling. In welcher Welt leben wir?</p><p><strong>Rolling Glass:</strong> Spielt der Erfolg in Zahlen für Sie keine Rolle?</p><p><strong>Eliot:</strong> YouTube ist eine Plattform, mehr nicht. Wir verbiegen uns nicht für Klicks, Watchtime oder CTR. Diese Zahlen spiegeln nie die ganze Wahrheit. Trotzdem werden wir gefunden. Trotzdem werden wir geliebt.</p><p><strong>Rolling Glass:</strong> Wie würden Sie Ihre Songs beschreiben?</p><p><strong>Eliot:</strong> Wir machen keine Songs zum Mitklatschen, sondern zum Mitdenken. Wer beides kann, ist ein Hörer, der uns versteht.</p>`)}
      ${interview('Afterdark Radio · Manchester, Herbst 2026','Die Farbe des Textes entscheidet der Hörer',`<p><strong>Moderator:</strong> Erklären Sie Ihren Hörern, was Ihre Texte bedeuten?</p><p><strong>Eliot:</strong> Meine Texte sind Teppiche aus Worten. Welche Farbe dieser Teppich hat, entscheidet der Hörer allein. Jeder kann ihn interpretieren, wie er sich darin erkennt oder was er dabei fühlt. Gedanken und Gefühle sind frei.</p><p><strong>Moderator:</strong> Verändert sich die Bedeutung?</p><p><strong>Eliot:</strong> Natürlich. Derselbe Song kann dich heute anders treffen als vor Jahren, weil inzwischen dein eigenes Leben dazwischenliegt.</p>`)}
      ${interview('Radio Meridian · Berlin, Sommer 2026','Wir sind keine politische Band',`<p><strong>Radio Meridian:</strong> Ihre Texte werden häufig politisch gelesen.</p><p><strong>Eliot:</strong> Wir sind keine politische Band. Wir mögen nur keine schlechte Politik. Wir verstehen Gewalt und Kriege nicht – und wir weigern uns, sie als normal zu akzeptieren.</p><p><strong>David:</strong> Grenzen, Fahnen und Machtspiele dürfen nicht wichtiger werden als Menschen. Die unbequeme Frage lautet immer: Wem dient ein Krieg? Dem Menschen jedenfalls nicht.</p>`)}
      ${interview('Northern Sound · Pear Studios, 2026','Vier Rollen, ein gemeinsames Zentrum',`<p><strong>Northern Sound:</strong> Was hält diese vier sehr unterschiedlichen Musiker zusammen?</p><p><strong>Eliot:</strong> Gefühl und Stimme.</p><p><strong>David:</strong> Klang und Tiefe.</p><p><strong>Dylan:</strong> Wärme und Verbindung.</p><p><strong>Brian:</strong> Rhythmus und Kontrolle.</p><p><strong>Eliot:</strong> Als wir zum ersten Mal zusammen spielten, klang es wie eine Schulband – nur dass wir alle in unterschiedlichen Klassen waren. Wir trafen uns auf der Fünf. Jetzt wollen wir gemeinsam zur Zehn.</p>`)}
      ${interview('Signal & Noise · Pear Studios','Der Tag, an dem das Studio zurückstarrte',`<p><strong>Signal & Noise:</strong> Wie geordnet laufen Sessions bei Depeche Lord?</p><p><strong>David:</strong> Während der zwanzigsten Demo kippte Dylan Kaffee über einen Verstärker. Als klar war, an welcher Stelle es passiert war, strichen wir dort den Synth. Man muss Zeichen erkennen.</p><p><strong>Eliot:</strong> Ein anderes Mal bedienten wir vier die falschen Regler. Was dabei herauskam, erfahren Sie nie. Gelöschte Bänder verschweigen vieles.</p><p><strong>Brian:</strong> Und einmal spielte die Band einen Song ohne Eliot ein, weil er auf der Studiotoilette eingeschlossen war. Seitdem wissen wir: Auch Abwesenheit kann produktiv sein.</p>`)}
    </div>`;
    if(statements) statements.innerHTML=`<div class="editorial-grid">
      ${quote('Eliot Reeves','„Wir sind nicht der Mittelpunkt der Musik. Wir sind Depeche Lord. Wir singen von dem, was du kennst, aber nicht aussprechen willst.“','Über die Band')}
      ${quote('Eliot Reeves','„Wenn wir mit unseren Songs auch nur das Herz eines einzelnen Menschen erreichen, haben sie erreicht, wofür sie geschaffen wurden.“','Über den Sinn der Songs')}
      ${quote('Eliot Reeves','„Wir haben vieles falsch gemacht und vieles richtig. Immer wenn wir glaubten, alles läuft prima, hatte das Leben einen anderen Einfall. Wir sind noch da. Also haben wir jeden Einfall überlebt.“','Über den Weg')}
      ${quote('Brian Rix','„Eliot sagte, ich solle mich nicht so laut in den Vordergrund trommeln. Ich sagte: Du singst zu leise.“','Über Rücksicht in der Band')}
      ${quote('Dylan Cole','„Mein Großvater sagte, ich solle etwas Anständiges lernen. Ich wurde Musiker und bewies, dass beides geht. Danke, Grandpa, für die Gitarre.“','Über seinen Anfang')}
      ${quote('Eliot Reeves','„Mich interessieren keine Zeitungstitel mit meinem Gesicht, wenn die Geschichte darin nur aus Lügen besteht.“','Über Presse')}
    </div>`;
    if(studio) studio.innerHTML=`<div class="editorial-intro">Studio Stories erzählen vom Alltag in Pear Studios: Fehler, Reibung, Pannen und jene absurden Momente, die nichts mit der inhaltlichen Entstehung eines einzelnen Songs zu tun haben.</div><div class="studio-story-grid">
      ${story('Der Kaffee-Break','Dylan kippte während der zwanzigsten Demo seine Tasse über den Verstärker. David fragte nur nach der genauen Stelle und erklärte den Ausfall zum Zeichen: Der Synth wurde dort gestrichen.')}
      ${story('Vier Männer, falsche Regler','Die Band wollte eigene Ideen am Mischpult umsetzen und schob den Toningenieur zur Seite. Was vier Musiker mit den falschen Reglern produzierten, blieb auf gelöschten Bändern zurück.')}
      ${story('Terry hinter der Scheibe','Eliot sah Terry mit hochgerissenen Armen hinter dem Pult und überlegte, seit wann sich dort oben Regler befanden. Terry wollte lediglich mitteilen: So nicht. Das ist Müll.')}
      ${story('Der Hit ohne Sänger','Eliot wurde auf der Studiotoilette eingeschlossen. Die anderen spielten den Song ohne ihn ein; später durfte er nur noch die Vocals ergänzen.')}
      ${story('Rücksicht nimmt Rücksicht','Nachdem Brian leiser und Eliot lauter geworden war, verlangte der Toningenieur beim nächsten Track das genaue Gegenteil. Brian nannte es das Ergebnis gegenseitiger Rücksichtnahme.')}
      ${story('Cello auf Sackkarre','Beim ersten Experiment mit Geigen und Cello kam der Cellist mit seinem Instrument auf einer Sackkarre herein. Eliot war in diesem Moment froh, lediglich Sänger zu sein.')}
    </div>`;
    if(staff) staff.innerHTML=`<div class="editorial-intro"><strong>Pear Studios</strong> liegt offiziell in London – das Schild sagt allerdings „Donlon“. In einem alten Industriegebäude treffen analoge Technik, ungewöhnliche Akustik und die vier Arbeitsweisen der Band aufeinander.</div><div class="editorial-grid">
      ${card('PEAR STUDIOS','Der kreative Mittelpunkt','Hier wird nicht nur aufgenommen. Es wird gearbeitet, verworfen, gestritten, neu gedacht und so lange verändert, bis Klang und Text dieselbe Richtung einschlagen.')}
      ${card('MILES WINTERS','Management','Miles brachte Struktur in eine Welt, die größer geworden war als die vier Musiker. Entscheidend für die Band: Er organisiert den Erfolg, ohne ihre künstlerische Freiheit anzutasten.')}
      ${card('EMMA HOLLIS','Public Relations','Emma setzt auf die richtige Aufmerksamkeit statt auf permanente Öffentlichkeit. Weniger Interviews, weniger Lärm – aber die richtigen Momente, in denen die Band ihre eigene Persönlichkeit zeigen kann.')}
      ${card('FROST & BRONZ CONCERTS','Tourproduktion','Die Agentur verantwortet Booking, Logistik, Bühnenbau und die visuelle Umsetzung der Depeche-Lord-Welt bei den Live-Shows.')}
      ${card('NOCTURNE RECORDS','Label · Manchester','Das Label unterstützt Darkwave-, Synthpop- und Post-Punk-Projekte mit künstlerischer Eigenständigkeit. Auf der Webseite bleibt es bewusst im Hintergrund.')}
      ${card('TERRY McGUIRRAY','Engineer · Pear Studios','Terry sitzt hinter der Scheibe, hört jedes Detail und besitzt eine bemerkenswert direkte Körpersprache, wenn eine Aufnahme nicht funktioniert.')}
    </div>`;
    if(offrecord) offrecord.innerHTML=`<div class="editorial-intro">Geschichten, die vermutlich nicht in der offiziellen Biografie stehen sollten.</div><div class="editorial-grid">
      ${off('Northline Radio','Omas Wok',`Brian: „Wir probten oft bei meiner Oma. Eines Tages war mein Becken verschwunden. Sie rief aus der Küche: Junge, dein Wok ist mir vom Herd gesprungen.“`)}
      ${off('The Late Signal','Brian möchte singen',`Brian: „Darf ich auch einmal singen?“ — Eliot: „Wer spielt dann Drums?“`)}
      ${off('Northline Radio','Die Drehtür',`David: „Eliot, erinnerst du dich an die kaputte Drehtür in Los Angeles?“ — Eliot: „Klar.“ — David: „Du hattest deinen Fuß in der Lichtschranke.“`)}
      ${off('World Frequency','Der beste Sitz im Flugzeug',`„Warum sitzt du im Flugzeug immer vorn?“ — „Wenn wir abstürzen, kommt der Getränkewagen noch einmal vorbei.“`)}
      ${off('The Late Signal','Der feindliche Baum',`„Ich habe gebremst. Der Baum hat nicht reagiert. Erst da begriff ich, dass auch ein Baum einem feindlich gesinnt sein kann.“`)}
      ${off('Studio Window','Ein Hit ohne Eliot',`„Gehen Sie nie in einem Studio aufs WC. In der Zeit produzieren andere Hits.“`)}
      ${off('The Late Signal','Das schwarze Musikvideo',`Der Kameramann vergaß die Objektivabdeckung. Brian nannte das Ergebnis kreative Kunst: Jeder Zuschauer könne sich seine eigenen Bilder vorstellen.`)}
      ${off('Backstage Direct','Waldbühne Berlin',`Eliot entdeckte angeblich eine Tribüne mit 5.000 Fans hinter der Bühne. Seine Frage: „Wer bejubelt fünf Stunden lang Brians Hinterkopf?“`)}
      ${off('The Late Signal','Der falsche Albumtitel',`Die gesamte Pressung trug den falschen Titel. Eliot schlug vor, unverkaufte alte Scheiben in die neuen Hüllen zu stecken. „Natürlich hatten wir keine unverkauften Scheiben.“`)}
    </div>`;
    document.querySelectorAll('.interview-item > button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('active')));
  }
  function interview(source,title,body){return '<article class="interview-item"><button type="button"><div><span>'+source+'</span><strong>'+title+'</strong></div><b>+</b></button><div class="interview-body">'+body+'</div></article>'}
  function quote(speaker,text,topic){return '<article class="editorial-card"><span class="source">'+topic+'</span><blockquote>'+text+'</blockquote><span class="speaker">— '+speaker+'</span></article>'}
  function card(source,title,text){return '<article class="editorial-card"><span class="source">'+source+'</span><h5>'+title+'</h5><p>'+text+'</p></article>'}
  function story(title,text){return '<article class="studio-story"><h5>'+title+'</h5><p>'+text+'</p></article>'}
  function off(source,title,text){return '<article class="editorial-card off-record-card"><span class="source">'+source+'</span><h5>'+title+'</h5><p>'+text+'</p></article>'}
  function buildDlNavigation(dl){
    const block=dl.querySelector('#block-depeche'); if(!block) return;
    block.classList.add('active');
    const old=block.querySelector('.dl-quick-nav');if(old)old.remove();
    const nav=document.createElement('nav'); nav.className='dl-quick-nav'; nav.setAttribute('aria-label','Depeche Lord Bereiche');
    const items=[
      ['Tracks','group-depeche-official'],['World Tour 2026','group-depeche-tour'],['Band','group-depeche-band'],['Geschichte','group-depeche-origin'],['Interviews','group-depeche-interviews'],['Statements','group-depeche-statements'],['Studio Stories','group-depeche-behind'],['Pear Studios & Team','group-depeche-staff'],['Off the Record','group-depeche-offrecord'],['Archiv','group-depeche-archive']
    ];
    items.forEach(function(item){const b=document.createElement('button');b.type='button';b.textContent=item[0];b.dataset.target=item[1];b.onclick=function(){openDlGroup(item[1],b);};nav.appendChild(b);});
    block.insertBefore(nav,block.firstChild);
    // Start with every Depeche-Lord subsection closed. Visitors choose the section themselves.
    block.querySelectorAll(':scope > .subgroups > .subgroup > .group-videos.active').forEach(function(el){
      el.classList.remove('active');
      setButtons(el.id,false);
    });
    nav.querySelectorAll('button.active').forEach(function(btn){btn.classList.remove('active');});
  }
  function buildStories(){
    document.querySelectorAll('#group-depeche-official .story-toggle,#group-depeche-official .story-panel').forEach(el=>el.remove());
  }

  function buildStudioTour(){
    const view=document.getElementById('view-studio');
    if(!view || view.dataset.ready==='true') return;
    view.dataset.ready='true';
    const zones=[...new Set(STUDIO_ROOMS.map(room=>room.zone))];
    const zoneMarkup=zones.map(zone=>{
      const cards=STUDIO_ROOMS.filter(room=>room.zone===zone).map(room=>`<button class="studio-room-card" type="button" data-studio-room="${room.id}" aria-expanded="false"><span class="studio-room-image"><img src="${room.image}" alt="${room.name} in Pear Studios" loading="lazy"><span class="studio-room-number">${room.number}</span></span><span class="studio-room-card-copy"><strong>${room.name}</strong><small>${room.short}</small></span></button>`).join('');
      return `<section class="studio-zone"><div class="studio-zone-head"><span>RUNDGANG</span><h3>${zone}</h3></div><div class="studio-room-grid">${cards}</div></section>`;
    }).join('');
    view.innerHTML=`<section class="studio-tour-hero" id="pear-studios"><img src="assets/images/pear-studios.webp" alt="Pear Studios in Donlon"><div class="studio-tour-hero-copy"><p>PEAR STUDIOS · DONLON</p><h2>Rundgang durch das Studio</h2><div>13 feste Räume. Ein zusammenhängender Arbeitsort für Musik, Management, Medien und Technik.</div></div></section><section class="studio-tour-intro"><h3>Der Rundgang</h3><p>Die Räume sind in einer nachvollziehbaren Reihenfolge angeordnet. Ein Klick auf eine Kachel öffnet das große Raum-Sheet mit seiner Funktion. Es bleibt immer nur ein Raum geöffnet.</p></section><section class="studio-room-detail" id="studio-room-detail" aria-live="polite"><p class="studio-detail-placeholder">Wähle einen Raum aus der Übersicht.</p></section><div class="studio-zones" id="studio-room-overview">${zoneMarkup}</div>`;
    view.querySelectorAll('[data-studio-room]').forEach(button=>button.addEventListener('click',()=>showStudioRoom(button.dataset.studioRoom,button)));
  }
  function closeStudioRoom(scrollBack){
    const detail=document.getElementById('studio-room-detail');
    if(!detail) return;
    const active=document.querySelector('.studio-room-card.active');
    document.querySelectorAll('.studio-room-card.active').forEach(button=>{button.classList.remove('active');button.setAttribute('aria-expanded','false');});
    detail.classList.remove('active');
    detail.dataset.room='';
    detail.innerHTML='<p class="studio-detail-placeholder">Wähle einen Raum aus der Übersicht.</p>';
    if(scrollBack && active) setTimeout(()=>active.scrollIntoView({behavior:'smooth',block:'center'}),40);
  }
  function showStudioRoom(id,button){
    const detail=document.getElementById('studio-room-detail');
    const room=STUDIO_ROOMS.find(item=>item.id===id);
    if(!detail || !room) return;
    if(detail.dataset.room===id){ closeStudioRoom(true); return; }
    document.querySelectorAll('.studio-room-card').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-expanded',active?'true':'false');});
    detail.dataset.room=id;
    detail.classList.add('active');
    detail.innerHTML=`<div class="studio-detail-grid"><a href="${room.image}" target="_blank" rel="noopener noreferrer" class="studio-detail-image"><img src="${room.image}" alt="${room.name} in Pear Studios"></a><div class="studio-detail-copy"><span>RAUM ${room.number} · ${room.zone}</span><h3>${room.name}</h3><p>${room.text}</p><div class="studio-detail-actions"><a href="${room.image}" target="_blank" rel="noopener noreferrer">Bild groß öffnen</a><button type="button" id="studio-detail-close">Raum schließen</button></div></div></div>`;
    const closeButton=document.getElementById('studio-detail-close');
    if(closeButton) closeButton.addEventListener('click',()=>closeStudioRoom(true));
    setTimeout(()=>detail.scrollIntoView({behavior:'smooth',block:'start'}),60);
  }
    function showArtist(id){
    const a=ARTISTS.find(x=>x.id===id); if(!a) return;
    document.querySelectorAll('.hall-portrait').forEach(b=>b.classList.toggle('active',b.dataset.artist===id));
    let playlistLinks='';
    if(a.playlists) playlistLinks=a.playlists.map((p,i)=>'<a class="secondary" target="_blank" rel="noopener noreferrer" href="'+p[1]+'">'+p[0]+'</a>').join('');
    else playlistLinks='<a class="secondary" target="_blank" rel="noopener noreferrer" href="'+a.playlist+'">Mehr von '+a.name+'</a>';
    const d=document.getElementById('artist-detail');
    d.innerHTML='<div class="detail-grid"><a class="detail-song" target="_blank" rel="noopener noreferrer" href="https://youtu.be/'+a.video+'"><img src="https://img.youtube.com/vi/'+a.video+'/hqdefault.jpg" alt="'+a.song+'"><span>'+a.song+'</span></a><div class="detail-copy"><span class="channel-badge">'+a.channel+'</span><h3>'+a.name+'</h3><p>'+a.genre+'</p><div class="detail-actions"><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/'+a.video+'">Klicksong ansehen</a>'+playlistLinks+'</div></div></div>';
    setTimeout(()=>d.scrollIntoView({behavior:'smooth',block:'center'}),40);
  }
  ready(function(){
    const hero=document.querySelector('.hero'); if(!hero) return;
    const holder=document.createElement('div');holder.innerHTML="\n<section class=\"new-portal\" id=\"new-portal\">\n  <div class=\"portal-grid-new\">\n    <button class=\"portal-card-new portal-dl\" type=\"button\" data-main-view=\"view-depeche\">\n      <span class=\"portal-eyebrow\">MAIN ACT</span>\n      <span class=\"portal-title\">DEPECHE LORD</span>\n      <span class=\"portal-subtitle\">Tracks \u00b7 World Tour \u00b7 Band \u00b7 Stories</span>\n    </button>\n    <button class=\"portal-card-new portal-studio\" type=\"button\" data-main-view=\"view-studio\">\n      <span class=\"portal-eyebrow\">STUDIO-RUNDGANG</span>\n      <span class=\"portal-title\">PEAR STUDIOS</span>\n      <span class=\"portal-action\">Zum Rundgang</span>\n    </button>\n    <button class=\"portal-card-new portal-hall\" type=\"button\" data-main-view=\"view-artists\">\n      <span class=\"portal-eyebrow\">REWIND & SOUND OF LINES</span>\n      <span class=\"portal-title\">THE ARTISTS\u2019 HALL</span>\n      <span class=\"portal-subtitle\">Klickf\u00e4higer K\u00fcnstlergang \u00b7 nach Musikrichtungen geordnet</span>\n      <span class=\"portal-action\">K\u00fcnstlergang \u00f6ffnen</span>\n    </button>\n  </div>\n  <nav class=\"main-switcher\" aria-label=\"Hauptnavigation\">\n    <button type=\"button\" data-main-view=\"view-depeche\">Depeche Lord</button>\n    <button type=\"button\" data-main-view=\"view-studio\">Pear Studios</button>\n    <button type=\"button\" data-main-view=\"view-artists\">K\u00fcnstlergang</button>\n    <button type=\"button\" data-scroll-top>Nach oben</button>\n  </nav>\n  <main class=\"new-main\">\n    <section class=\"main-view\" id=\"view-depeche\" aria-label=\"Depeche Lord\"></section>\n    <section class=\"main-view\" id=\"view-studio\" aria-label=\"Pear Studios\"></section>\n    <section class=\"main-view\" id=\"view-artists\" aria-label=\"K\u00fcnstlergang\">\n      <header class=\"hall-header\">\n        <p class=\"hall-kicker\">THE ARTISTS\u2019 HALL</p>\n        <h2>Zwei Fl\u00fcgel. Ein musikalisches Universum.</h2>\n        <p>Ein Portr\u00e4t \u00f6ffnet den ausgew\u00e4hlten Einstiegssong und den Weg zur jeweiligen Playlist. Depeche Lord bleibt als Hauptact im eigenen Bereich.</p>\n      </header>\n      <div class=\"hall-wing rewind-wing\">\n        <div class=\"wing-heading\"><span>CHANNEL TWO</span><h3>REWIND</h3><p>80s & 90s</p></div>\n        <div class=\"genre-row\"><h4>Synthpop \u2192 Rockballaden</h4><div class=\"portrait-grid\"><button class=\"hall-portrait\" type=\"button\" data-artist=\"luna\" aria-label=\"Luna Ray \u00f6ffnen\">\n      <span class=\"portrait-frame\"><img src=\"assets/images/asset-029.webp\" alt=\"Luna Ray\"></span>\n      <span class=\"portrait-copy\"><strong>Luna Ray</strong><small>Synthpop \u00b7 80s Pop</small></span>\n    </button><button class=\"hall-portrait\" type=\"button\" data-artist=\"jason\" aria-label=\"Jason Hartley \u00f6ffnen\">\n      <span class=\"portrait-frame\"><img src=\"assets/images/asset-030.webp\" alt=\"Jason Hartley\"></span>\n      <span class=\"portrait-copy\"><strong>Jason Hartley</strong><small>80s Rock \u00b7 Rockballaden</small></span>\n    </button></div></div>\n      </div>\n      <div class=\"hall-wing sol-wing\">\n        <div class=\"wing-heading\"><span>CHANNEL ONE</span><h3>SOUND OF LINES</h3><p>Genres without borders</p></div>\n        <div class=\"genre-row\"><h4>Dark & Rock</h4><div class=\"portrait-grid\"><button class=\"hall-portrait\" type=\"button\" data-artist=\"ravens\" aria-label=\"Ravens Cry \u00f6ffnen\">\n      <span class=\"portrait-frame\"><img src=\"assets/images/asset-041.webp\" alt=\"Ravens Cry\" style=\"object-position:center 20%\"></span>\n      <span class=\"portrait-copy\"><strong>Ravens Cry</strong><small>Dark Rock \u00b7 Gothic Rock</small></span>\n    </button><button class=\"hall-portrait\" type=\"button\" data-artist=\"echoheart\" aria-label=\"Echoheart \u00f6ffnen\">\n      <span class=\"portrait-frame\"><img src=\"assets/images/asset-032.webp\" alt=\"Echoheart\"></span>\n      <span class=\"portrait-copy\"><strong>Echoheart</strong><small>Rockballaden \u00b7 Soft Rock</small></span>\n    </button></div></div><div class=\"genre-row\"><h4>Electronic & Modern</h4><div class=\"portrait-grid\"><button class=\"hall-portrait\" type=\"button\" data-artist=\"nightpulse\" aria-label=\"Nightpulse \u00f6ffnen\">\n      <span class=\"portrait-frame\"><img src=\"assets/images/asset-033.webp\" alt=\"Nightpulse\"></span>\n      <span class=\"portrait-copy\"><strong>Nightpulse</strong><small>Electronic \u00b7 Deep House</small></span>\n    </button><button class=\"hall-portrait\" type=\"button\" data-artist=\"naylah\" aria-label=\"NAYLAH \u00f6ffnen\">\n      <span class=\"portrait-frame\"><img src=\"assets/images/asset-034.webp\" alt=\"NAYLAH\"></span>\n      <span class=\"portrait-copy\"><strong>NAYLAH</strong><small>Pop \u00b7 Dance \u00b7 R&amp;B</small></span>\n    </button><button class=\"hall-portrait\" type=\"button\" data-artist=\"ethan\" aria-label=\"Ethan Vale \u00f6ffnen\">\n      <span class=\"portrait-frame\"><img src=\"assets/images/asset-035.webp\" alt=\"Ethan Vale\"></span>\n      <span class=\"portrait-copy\"><strong>Ethan Vale</strong><small>Pop Ballads \u00b7 Singer-Songwriter</small></span>\n    </button></div></div><div class=\"genre-row\"><h4>Country & Acoustic</h4><div class=\"portrait-grid\"><button class=\"hall-portrait\" type=\"button\" data-artist=\"savannah-cole\" aria-label=\"Savannah Lane &amp; Cole Rivers \u00f6ffnen\">\n      <span class=\"portrait-frame\"><img src=\"assets/images/asset-036.webp\" alt=\"Savannah Lane &amp; Cole Rivers\"></span>\n      <span class=\"portrait-copy\"><strong>Savannah Lane &amp; Cole Rivers</strong><small>Country \u00b7 Acoustic \u00b7 Duets</small></span>\n    </button></div></div><div class=\"genre-row\"><h4>World & Tradition</h4><div class=\"portrait-grid\"><button class=\"hall-portrait\" type=\"button\" data-artist=\"celtic\" aria-label=\"Celtic Whisper \u00f6ffnen\">\n      <span class=\"portrait-frame\"><img src=\"assets/images/asset-037.webp\" alt=\"Celtic Whisper\"></span>\n      <span class=\"portrait-copy\"><strong>Celtic Whisper</strong><small>Celtic \u00b7 Folk \u00b7 Fantasy</small></span>\n    </button><button class=\"hall-portrait\" type=\"button\" data-artist=\"ritmo\" aria-label=\"Ritmo del Alma \u00f6ffnen\">\n      <span class=\"portrait-frame\"><img src=\"assets/images/asset-038.webp\" alt=\"Ritmo del Alma\"></span>\n      <span class=\"portrait-copy\"><strong>Ritmo del Alma</strong><small>Latin Pop \u00b7 Acoustic \u00b7 Dance</small></span>\n    </button></div></div><div class=\"genre-row\"><h4>Retro</h4><div class=\"portrait-grid\"><button class=\"hall-portrait\" type=\"button\" data-artist=\"velvet\" aria-label=\"The Velvet Echoes \u00f6ffnen\">\n      <span class=\"portrait-frame\"><img src=\"assets/images/asset-039.webp\" alt=\"The Velvet Echoes\"></span>\n      <span class=\"portrait-copy\"><strong>The Velvet Echoes</strong><small>60s Beat \u00b7 Retro Pop</small></span>\n    </button></div></div>\n      </div>\n      <section class=\"artist-detail\" id=\"artist-detail\" aria-live=\"polite\">\n        <p class=\"detail-placeholder\">Klicke auf ein K\u00fcnstlerportr\u00e4t. Der ausgew\u00e4hlte Act erscheint hier.</p>\n      </section>\n    </section>\n  </main>\n</section>\n";const portal=holder.firstElementChild;hero.insertAdjacentElement('afterend',portal);
    buildStudioTour();
    const oldTop=document.querySelector('.top-grid'); if(oldTop) oldTop.style.display='none';
    ['sol-panel','rew-panel'].forEach(id=>{const e=document.getElementById(id);if(e)e.style.display='none';});
    const dl=document.getElementById('depeche-lord');const dlView=document.getElementById('view-depeche');if(dl&&dlView){dlView.appendChild(dl);buildDlHero(dl);buildEditorialContent(dl);buildDlNavigation(dl);buildStories();}
    document.querySelectorAll('[data-main-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.mainView)));
    document.querySelectorAll('[data-scroll-top]').forEach(b=>b.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'})));
    document.querySelectorAll('.hall-portrait').forEach(b=>b.addEventListener('click',()=>showArtist(b.dataset.artist)));
    document.querySelectorAll('#view-depeche .back-btn').forEach(b=>b.remove());
    if(window.location.hash === '#pear-studios') showView('view-studio');
    else if(window.location.hash === '#artists-hall') showView('view-artists');
    else showView('view-depeche');
    if(window.location.hash === '#depeche-lord'){
      setTimeout(function(){
        const target=document.querySelector('#depeche-lord .dl-main-hero') || document.getElementById('depeche-lord');
        if(target) target.scrollIntoView({behavior:'auto',block:'start'});
      },180);
    }
  });
})();

