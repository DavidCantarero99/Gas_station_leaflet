  //Codigo de Ubicacion de El Salvador
  var map = L.map('map').setView([13.68935, -89.18718], 10);
 
  //Base Layer (Apariencia , zoom del mapa)
  /* L.tileLayer('https://api.mapbox.com/styles/v1/misfits99/cljeuajvr00bx01qrarqj1h6s/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWlzZml0czk5IiwiYSI6ImNsamV1Nmp0dDB1bTYzZ3NjODNxMzkwaWQifQ.UZhCL1sqm13D1ScMusLE3w', 
   {maxZoom: 20, attribution: '&copy; <a href="https://www.mapbox.com/copyright">MapBox</a>'}).addTo(map); */
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);
 
 //Icono de Gasolinera para cada Ubicacion
   var myIcon = L.icon({
     iconUrl: 'https://img.icons8.com/external-nawicon-flat-nawicon/50/external-gas-station-location-nawicon-flat-nawicon.png',
     iconSize: [50, 50],
     
 });
 //icono para marcar ubicacion del Usuario
 var myUbication = L.icon({
     iconUrl: 'https://img.icons8.com/color/48/000000/interstate-truck.png',
     iconSize: [50, 50],
     
 });
 
 // Obtener la ubicación actual del usuario
 navigator.geolocation.getCurrentPosition(function (position) {
     var lat = position.coords.latitude;
     var lon = position.coords.longitude;
 
     // Crear un marcador en la ubicación actual
     var marker = L.marker([lat, lon],{icon: myUbication}).addTo(map);
 
     // Agregar un popup al marcador
     marker.bindPopup("<b>¡Estás aquí!</b>").openPopup();
 });
 
 //Lista de Gasolineras
 //#1
 var marker = L.marker([13.628932688297343, -87.88913446070899],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Santa Rosa de Lima</h3><a href="https://www.waze.com/ul?ll=13.628932688297343,-87.88913446070899&navigate=yes" target="_blank">Barrio Las Delicias y Boulevard Enmanuel, Santa Rosa de Lima, La Unión</a>');
     marker.bindPopup(popup);
 
 //#2
 var marker = L.marker([13.487270374150931, -88.18625788618655],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • El Tríangulo</h3><a href="https://www.waze.com/ul?ll=13.487270374150931,-88.18625788618655&navigate=yes" target="_blank">Carr. Panamericana San Miguel Ruta Militar</a>');
     marker.bindPopup(popup);
 
 //#3
 var marker = L.marker([13.343479606788831, -88.43480184563165],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Usulután</h3><a href="https://www.waze.com/ul?ll=13.343479606788831,-88.43480184563165&navigate=yes" target="_blank">Final Calle Grimaldi, Usulután / frente a pollo campestre</a>');
     marker.bindPopup(popup);
 
 //#4
 var marker = L.marker([13.729817989518333, -88.94875250206519],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Las Pavas</h3><a href="https://www.waze.com/ul?ll=13.729817989518333,-88.94875250206519&navigate=yes" target="_blank">Carr. Panamericana Y Autopista a San Miguel KM 32 Desvío Monte San Juan, Cojutepeque</a>');
     marker.bindPopup(popup);
 
 //#5
 var marker = L.marker([13.728711500374102, -89.06635715853413],{icon: myIcon}).addTo(map);
 marker.bindPopup("<b>PUMA • Panamericana </b>");
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Panamericana</h3><a href="https://www.waze.com/ul?ll=13.728711500374102,-89.06635715853413&navigate=yes" target="_blank">km 10 1/2 Bolulevard del Ejercito San Salvador</a>');
     marker.bindPopup(popup);
 
 //#6
 var marker = L.marker([13.69658715594877, -89.1397022575785],{icon: myIcon}).addTo(map);
 marker.bindPopup("<b>PUMA • Ejercito </b>");
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Ejercito</h3><a href="https://www.waze.com/ul?ll=13.69658715594877,-89.1397022575785&navigate=yes" target="_blank">Blv del Ejercito San Salvador</a>');
     marker.bindPopup(popup);
 
 //#7
 var marker = L.marker([13.706768630958509, -89.1927972312475],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Centro de Gobierno </h3><a href="https://www.waze.com/ul?ll=13.706768630958509,-89.1927972312475&navigate=yes" target="_blank">Entre 3era y 5ta av. Norte y 15 Calle Poniente, San Salvador</a>');
     marker.bindPopup(popup);
 
 //#8
 var marker = L.marker([13.699244811795822, -89.204638148464],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Bloom </h3><a href="https://www.waze.com/ul?ll=13.699244811795822,-89.204638148464&navigate=yes" target="_blank">Calle Rubén Darío Y 25 AV SUR # 1117</a>');
     marker.bindPopup(popup);
 
 //#9
 var marker = L.marker([13.691992190991408, -89.21003581960036],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Venezuela </h3><a href="https://www.waze.com/ul?ll=13.691992190991408,-89.21003581960036&navigate=yes" target="_blank">35 av. Sur y Blv Venezuela</a>');
     marker.bindPopup(popup);
 
 //#10
 var marker = L.marker([13.679289669913592, -89.2111965386071],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Vista Hermosa </h3><a href="https://www.waze.com/ul?ll=13.679289669913592,-89.2111965386071&navigate=yes" target="_blank">Carr. A Comalapa, Col. Vista Hermosa frente Rancho Navarra</a>');
     marker.bindPopup(popup);
 
 //#11
 var marker = L.marker([13.709885070219094, -89.20964007999233],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Los Héroes </h3><a href="https://www.waze.com/ul?ll=13.709885070219094,-89.20964007999233&navigate=yes" target="_blank">Intersección Los Héroes y calle Gabriela Mistral</a>');
     marker.bindPopup(popup);
 
 //#12
 var marker = L.marker([13.70086880099763, -89.21570160903411],{icon: myIcon}).addTo(map);
 marker.bindPopup("<b>PUMA • Roosevelt </b>");
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Roosevelt </h3><a href="https://www.waze.com/ul?ll=13.70086880099763,-89.21570160903411&navigate=yes" target="_blank">49 av. sur y Alameda Roosevelt Col. Flor Blanca</a>');
     marker.bindPopup(popup);
 
 //#13
 var marker = L.marker([13.695922783630019, -89.21670434874302],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Flor Blanca</h3><a href="https://www.waze.com/ul?ll=13.695922783630019,-89.21670434874302&navigate=yes" target="_blank">49 av. Sur y 12 calle poniente</a>');
     marker.bindPopup(popup);
 
 //#14
 var marker = L.marker([13.70814727169942, -89.22699024487623],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • San Antonio Abad</h3><a href="https://www.waze.com/ul?ll=13.70814727169942,-89.22699024487623&navigate=yes" target="_blank">Intersección Alameda Juan Pablo II y Blv. Constitución, San Salvador</a>');
     marker.bindPopup(popup);
 
 //#15
 var marker = L.marker([13.702109435317526, -89.23109617346871],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Escalón </h3><a href="https://www.waze.com/ul?ll=13.702109435317526,-89.23109617346871&navigate=yes" target="_blank">73 Av. Norte y paseo General Escalón</a>');
     marker.bindPopup(popup);
 
 //#16
 var marker = L.marker([13.683749430154325, -89.23623493920186],{icon: myIcon}).addTo(map);
 marker.bindPopup("<b>PUMA • Palermo </b>");
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Palermo </h3><a href="https://www.waze.com/ul?ll=13.683749430154325,-89.23623493920186&navigate=yes" target="_blank">Boulevard los próceres contigua a colonia Manuel Arce</a>');
     marker.bindPopup(popup);
 
 //#17
 var marker = L.marker([13.678401476083287, -89.25278358955933],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • El Pedregal </h3><a href="https://www.waze.com/ul?ll=13.678401476083287,-89.25278358955933&navigate=yes" target="_blank">Calle Chiltiupan y Av. El Pedregal # 14 Antiguo Cuscatlán</a>');
     marker.bindPopup(popup);
 
 //#18
 var marker = L.marker([13.674315752301272, -89.25211753820525],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Santa Elena</h3><a href="https://www.waze.com/ul?ll=13.674315752301272,-89.25211753820525&navigate=yes" target="_blank">Carretera Panamericana sentido a San Salvador y Boulevard Santa Elena</a>');
     marker.bindPopup(popup);
 
 //#19
 var marker = L.marker([13.66150178650196, -89.25487381430955],{icon: myIcon}).addTo(map);
 marker.bindPopup("<b>PUMA • Madre selva </b>");
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Madre selva </h3><a href="https://www.waze.com/ul?ll=13.66150178650196,-89.25487381430955&navigate=yes" target="_blank">Urb. Madre Selva, AV. El Espino Pasaje H-Sur Antiguo Cuscatlán</a>');
     marker.bindPopup(popup);
 
 //#20
 var marker = L.marker([13.671034615581938, -89.26366749104537],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • El Trébol / Merliot </h3><a href="https://www.waze.com/ul?ll=13.671034615581938,-89.26366749104537&navigate=yes" target="_blank">km. 91/2 carretera a santa tecla la Libertad</a>');
     marker.bindPopup(popup);
 
 //#21
 var marker = L.marker([13.653489689830069, -89.28046293656533],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Via del Mar </h3><a href="https://www.waze.com/ul?ll=13.653489689830069,-89.28046293656533&navigate=yes" target="_blank">Av. Los pingüinos Res. Vía del Mar Lote #1 Nuevo Cuscatlán</a>');
     marker.bindPopup(popup);
 
 //#22
 var marker = L.marker([13.679860932680963, -89.27380331377871],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Chiltiupán </h3><a href="https://www.waze.com/ul?ll=13.679860932680963,-89.27380331377871&navigate=yes" target="_blank">Calle Chiltiupan, Av. El Bálsamo, Polg. "S"</a>');
     marker.bindPopup(popup);
 
 //#23
 var marker = L.marker([13.673769067203766, -89.29806333942639],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Don Bosco </h3><a href="https://www.waze.com/ul?ll=13.673769067203766,-89.29806333942639&navigate=yes" target="_blank">2 av. Sur 18 calle pnte. Km 13 Santa Tecla Carr. Panamericana</a>');
     marker.bindPopup(popup);
 
 //#24
 var marker = L.marker([13.806574374605917, -89.17095232188548],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • San Nicolas , Popotlan </h3><a href="https://www.waze.com/ul?ll=13.806574374605917,-89.17095232188548&navigate=yes" target="_blank">Carretera Troncal del Norte km 14 1/2 apopa</a>');
     marker.bindPopup(popup);
 
 //#25
 var marker = L.marker([13.795485203710294, -89.17779638098048],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Apopa </h3><a href="https://www.waze.com/ul?ll=13.795485203710294,-89.17779638098048&navigate=yes" target="_blank">km 12 1/2 Carr. Troncal del Norte y Carr. a Quezaltepeque</a>');
     marker.bindPopup(popup);
 
 //#26
 var marker = L.marker([13.718033361841346, -89.35596032526932],{icon: myIcon}).addTo(map);
 marker.bindPopup("<b>PUMA • El Desvío </b>");
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • El Desvío </h3><a href="https://www.waze.com/ul?ll=13.718033361841346,-89.35596032526932&navigate=yes" target="_blank">Km. 22 1/2 Carr. A Santa Ana - Carretera a los chorros en sentido hacia Santa Tecla</a>');
     marker.bindPopup(popup);
 
 //#27
 var marker = L.marker([13.739558332698099, -89.36251271376254],{icon: myIcon}).addTo(map);
 marker.bindPopup("<b>UNO • Pasatiempo</b>");
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687974852/Uno_z3x1cy.png"><h3>UNO • Pasatiempo</h3><a href="https://www.waze.com/ul?ll=13.739558332698099,-89.36251271376254&navigate=yes" target="_blank">Carr. A Santa Ana Km 26 1/2 San Juan Opico</a>');
     marker.bindPopup(popup);
 
 //#28
 var marker = L.marker([13.815334960756696, -89.42108789077452],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • American </h3> <a href="https://www.waze.com/ul?ll=13.815334960756696,-89.42108789077452&navigate=yes" target="_blank">Km. 36 1/2 Carr. Santa Ana Frente American Park</a>');
     marker.bindPopup(popup);
 
 
 //#29
 var marker = L.marker([13.721815733540511, -89.71954757021652],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Sonsonate </h3> <a href="https://www.waze.com/ul?ll=13.721815733540511,-89.71954757021652&navigate=yes" target="_blank">Carr. Sonsonate - San Salvador entre 1era y 2da Calle Oriente Km 66 1/2 Col. Santa Marta</a>');
     marker.bindPopup(popup);
 
 //#30
 var marker = L.marker([13.738113050540965, -89.7339706852786],{icon: myIcon}).addTo(map);
   var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Buenos Aires </h3>  <a href="https://www.waze.com/ul?ll=13.738113050540965,-89.7339706852786&navigate=yes" target="_blank">Carr. A Sonsonate Lotificación Buenos Aires 1Block 1, Nahuizalco</a>');
     marker.bindPopup(popup);
 
 //#31
 var marker = L.marker([13.989509385898225, -89.55882423678847],{icon: myIcon}).addTo(map);
   var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Independencia</h3> <a href="https://www.waze.com/ul?ll=13.989509385898225,-89.55882423678847&navigate=yes" target="_blank">Av. Independencia Sur y 11 Calle oriente</a>');
     marker.bindPopup(popup);
 
 //#32
 var marker = L.marker([13.988102028202459, -89.66752021961925],{icon: myIcon}).addTo(map);
   var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Chalchuapa</h3> <a href="https://www.waze.com/ul?ll=13.988102028202459,-89.66752021961925&navigate=yes">Entrada A Chalchuapa Km 87 Puma Chalchuapa<a/>');
     marker.bindPopup(popup);
 
 //#33
 var marker = L.marker([13.969918711506205, -89.75469637634504],{icon: myIcon}).addTo(map);
 var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Atiquizaya</h3> <a href="https://www.waze.com/ul?ll=13.969918711506205,-89.75469637634504&navigate=yes" target="_blank">Calle a la Estación del Ferrocarril Av. Central Sur Barrio San Juan, Atiquizaya </a>');
     marker.bindPopup(popup);
 
 //#34
 var marker = L.marker([13.957999577209465, -89.78103804879784],{icon: myIcon}).addTo(map);
   var popup = L.popup({maxWidth: 100 })
     .setContent('<img src="https://res.cloudinary.com/dqvx7ssxy/image/upload/c_scale,w_100/v1687968730/gasolinera-puma-vector-logo_bkx9el.png"><h3>PUMA • Turin</h3> <a href="https://www.waze.com/ul?ll=13.957999577209465,-89.78103804879784&navigate=yes" target="_blank">Carr. Ahuachapán 88 1/2 Turín, Ahuachapán</a>');
     marker.bindPopup(popup);