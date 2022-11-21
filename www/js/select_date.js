"use strict";

if ( localStorage.getItem( 'city_name' ) ) {
    
	city = localStorage.getItem( 'city_name' );
	location_span.innerHTML = city;

} else {
    
    window.location.href = 'index.html';

} 

height_header = header_top.clientHeight;

height_footer_func();

let calendar = document.getElementById( 'calendar' ),
	select_date = document.getElementById( 'select_date' ),
	input_select_date = document.getElementById( 'input_select_date' ),
	list_all_years = document.getElementById( 'list_all_years' ),
	div_list_all_years = document.getElementById( 'div_list_all_years' ),
	open_list_years = document.getElementById( 'open_list_years' ),
	close_list_years = document.getElementById( 'close_list_years' ),
	year = calendar.getElementsByTagName( 'h1'),
	div_calendar = calendar.querySelectorAll( '.calendar_year' ),
	first_day_month,
	count_year = -1,
	count_h_1 = 0,
	height_select_date = select_date.clientHeight,
	plus_block = document.getElementById( 'plus_block' ),
	min_year = 1980,
	max_year = 2069,
	year_input,
	top_scroll = false,
	bottom_scroll = false,
	select_year = false,
	not_scroll = true,
	li_too_id = [],
	name_class, 
	select_get_info,
	span_year_input;

plus_block.style.height = height_select_date + 'px';

for ( let i = min_year; i < ( max_year + 1 ); i++ ) {
	let year = '<span class="d-block m-b-20">' + i + '</span>';

	div_list_all_years.insertAdjacentHTML( 'beforeend', year );
}

div_list_all_years.insertAdjacentHTML( 'afterbegin', 
									   '<div style="height: 30px; width: 100%;"></div>' );
div_list_all_years.insertAdjacentHTML( 'beforeend', 
									   '<div style="height: 30px; width: 100%;"></div>' );

for ( let item of div_calendar ) {
	
	year[ count_h_1 ].innerHTML = now_year + count_year;
	year[ count_h_1 ].classList.add( 'year_h_1' );

	let count_month = 0;

	for ( let ul of item.children ) {
		first_day_month = new Date( now_year + count_year, count_month, 1 ).getDay();

		ul.innerHTML = '<h3 class="m-b-10 m-t-30">' + month_name[ count_month ] + '</h3>';

		if ( first_day_month === 0 ) {
			first_day_month = 7;
		}

		for ( let i = 1; i < first_day_month; i++ ) {
			ul.innerHTML += '<li></li>';
		}

        if ( count_month === 0  || 
             count_month === 2  || 
             count_month === 4  ||
             count_month === 6  || 
             count_month === 7  || 
             count_month === 9  || 
             count_month === 11 ) {

                month_days = 31;

        } else if ( count_month === 3 || 
                    count_month === 5 || 
                    count_month === 8 || 
                    count_month === 10 ) {

                month_days = 30;

        } else if ( count_month === 1 ) {
            
            if ( ( now_year % 4 ) === 0 ) {
                month_days = 29;
            } else {
                month_days = 28;
            }

        }  

		for ( let i = 1; i < ( month_days + 1 ); i++ ) {
			ul.innerHTML += '<li class="text-center pos-rel">' + i + '</li>';
		}

		count_month++;
	}

	count_year++;
	count_h_1++;

}

if ( localStorage.getItem( 'calendar' ) === null ) { 
    localStorage.setItem( 'calendar', calendar.innerHTML );
}

function inner_get_info( select_get_info ) {
    let year_h_1 = calendar.getElementsByTagName( 'h1' ),
    	object_ekadashi,
    	id_li;
    
    for ( let i = 0; i < select_get_info.length; i++ ){

    	let get_year = select_get_info[i].value,
            get_jan = select_get_info[i].jan,
            get_feb = select_get_info[i].feb,
            get_mar = select_get_info[i].mar,
            get_apr = select_get_info[i].apr,
            get_may = select_get_info[i].may,
            get_jun = select_get_info[i].jun,
            get_jul = select_get_info[i].jul,
            get_aug = select_get_info[i].aug,
            get_sem = select_get_info[i].sem,
            get_oct = select_get_info[i].oct,
            get_nov = select_get_info[i].nov,
            get_dem = select_get_info[i].dem,
            calendar_ul = calendar.querySelectorAll( '.calendar_year')[ i ].getElementsByTagName( 'ul' );

        if ( year_h_1[ i ].textContent === String( now_year ) ) {
        	year_h_1[ i ].classList.add( 'now_year' );
        }

        function display_data( get_month, numb_ul, value ) {

        	let calendar_ul_li = calendar_ul[numb_ul].getElementsByTagName('li'),
        		calendar_ul_h_3 = calendar_ul[numb_ul].getElementsByTagName('h3'),
        		class_li;

        	if (typeof(get_month[value]) === 'object') {

        		object_ekadashi = Object.values(get_month[value]);
        		class_li = 'ekadashi';

	        	if (Array.isArray(object_ekadashi)) {

					if (object_ekadashi[1] === 'Putrada') {
	                    id_li = 'putrada'; 
	                } else if (object_ekadashi[1] === 'Sat-tila') {
	                    id_li = 'sat-tila'; 
	                } else if (object_ekadashi[1] === 'Bhaimi') {
	                    id_li = 'bhaimi'; 
	                } else if (object_ekadashi[1] === 'Vijaya') {
	                    id_li = 'vijaya'; 
	                } else if (object_ekadashi[1] === 'Amalaki vrata') {
	                    id_li = 'amalaki'; 
	                } else if (object_ekadashi[1] === 'Papamocani') {
	                    id_li = 'papamocani'; 
	                } else if (object_ekadashi[1] === 'Kamada') {
	                    id_li = 'kamada'; 
	                } else if (object_ekadashi[1] === 'Varuthini') {
	                    id_li = 'varuthini'; 
	                } else if (object_ekadashi[1] === 'Mohini') {
	                    id_li = 'mohini'; 
	                } else if (object_ekadashi[1] === 'Apara') {
	                    id_li = 'apara'; 
	                } else if (object_ekadashi[1] === 'Pandava Nirjala') {
	                    id_li = 'pandava'; 
	                } else if (object_ekadashi[1] === 'Yogini') {
	                    id_li = 'yogini'; 
	                } else if (object_ekadashi[1] === 'Sayana') {
	                    id_li = 'sayana'; 
	                } else if (object_ekadashi[1] === 'Kamika') {
	                    id_li = 'kamika'; 
	                } else if (object_ekadashi[1] === 'Pavitropana') {
	                    id_li = 'pavitra'; 
	                } else if (object_ekadashi[1] === 'Annada') {
	                    id_li = 'annada'; 
	                } else if (object_ekadashi[1] === 'Parsva') {
	                    id_li = 'parsva'; 
	                } else if (object_ekadashi[1] === 'Indira') {
	                    id_li = 'indira'; 
	                } else if (object_ekadashi[1] === 'Padmini') {
	                    id_li = 'padmini'; 
	                } else if (object_ekadashi[1] === 'Parama') {
	                    id_li = 'parama'; 
	                } else if (object_ekadashi[1] === 'Pasankusa') {
	                    id_li = 'pasankusa'; 
	                } else if (object_ekadashi[1] === 'Rama') {
	                    id_li = 'rama-ekadashi'; 
	                } else if (object_ekadashi[1] === 'Utthana') {
	                    id_li = 'utthana'; 
	                } else if (object_ekadashi[1] === 'Moksada') {
	                    id_li = 'moksada'; 
	                } else if (object_ekadashi[1] === 'Saphala') {
	                    id_li = 'saphala'; 
	                } else if (object_ekadashi[1] === 'Utpanna') {
	                    id_li = 'utpanna'; 
	            	} 
	            }

        	} else if (typeof(get_month[value]) === 'string') {

        		if (get_month[value] === '1') {
        			class_li = 'nityananda';
        			id_li = 'nityananda';
        		} else if (get_month[value] === '2') {
        			class_li = 'chaytanya';
        			id_li = 'chaytanya';
        		} else if (get_month[value] === '3') {
        			class_li = 'rama';
        			id_li = 'sita';
        		} else if (get_month[value] === '4') {
        			class_li = 'nrisimha';
        			id_li = 'nrisimha';
        		} else if (get_month[value] === '6') {
        			class_li = 'balarama';
        			id_li = 'baladeva';
        		} else if (get_month[value] === '7') {
        			class_li = 'krishna';
        			id_li = 'krishna';
        		} else if (get_month[value] === '8') {
        			class_li = 'bhaktivedanta';
        			id_li = 'bhaktivedanta';
        		} else if (get_month[value] === '9') {
        			class_li = 'radharany';
        			id_li = 'radharany';
        		} else if (get_month[value] === 'A') {
        			class_li = 'govardhana';
        			id_li = 'govardhana';
        		} else if (get_month[value] === 'B') {
        			class_li = 'radha-yatra';
        			id_li = 'radha-yatra';
        		}

        	}

        	for ( let li of calendar_ul_li ) {

        		if ((li.textContent) === value) {
    				li.classList.toggle(class_li);
    				li.id = id_li;
    			}

        		if (get_month === get_jun) {

        			if ((li.textContent) === '14') {
        				li.classList.add('vyasapudja');

        				if (li.hasAttribute('id')) {
            				let attr = li.getAttribute('id');

            				if ((attr !== 'vyasapudja') && (!attr.includes('vyasapudja'))) {
            					li.setAttribute('id', attr + '_' + 'vyasapudja');
            					li.classList.add('too_id');
            				}
            				
            			} else {
            				li.id = 'vyasapudja';
            			}

            		}

        		}

        		if (get_month === get_dem) {

        			if ((li.textContent) === '25') {
        				li.classList.add('rozhdestvo');

            			if (li.hasAttribute('id')) {
            				let attr = li.getAttribute('id');

            				if ((attr !== 'rozhdestvo') && (!attr.includes('rozhdestvo'))) {
            					li.setAttribute('id', attr + '_' + 'rozhdestvo');
            					li.classList.add('too_id');
            				}

            			} else {
            				li.id = 'rozhdestvo';
            			}

            		}

        		}

            	if ((li.parentElement.parentElement.previousElementSibling).textContent === 
        			String(now_year)) {

            		if ((li.parentElement.children[0]).textContent === month_name[now_month]) { 

            			if (li.textContent === String(now_date_number)) {
            			    
            				li.classList.add('now_date');
            			}

            		}

            	}

        	}

        	for (let h_3 of calendar_ul_h_3) {

        		if ((h_3.parentElement.parentElement.previousElementSibling).textContent === 
        			String(now_year)) {
        		
            		if ((h_3.textContent) === month_name[now_month]) {
            			h_3.classList.add('now_month');
            		}

            	}
        	}

        }

    	for (let value in get_jan) {

    		display_data(get_jan, 0, value);

    	}

    	for (let value in get_feb) {
    		
    		display_data(get_feb, 1, value);

    	}

    	for (let value in get_mar) {
    		
    		display_data(get_mar, 2, value);

    	}

    	for (let value in get_apr) {
    		
    		display_data(get_apr, 3, value);

    	}

    	for (let value in get_may) {
    		
    		display_data(get_may, 4, value);

    	}

    	for (let value in get_jun) {
    		
    		display_data(get_jun, 5, value);

    	}

    	for (let value in get_jul) {
    		
    		display_data(get_jul, 6, value);

    	}

    	for (let value in get_aug) {
    		
    		display_data(get_aug, 7, value);

    	}

    	for (let value in get_sem) {
    		
    		display_data(get_sem, 8, value);

    	}

    	for ( let value in get_oct ) {
    		
    		display_data( get_oct, 9, value );

    	}

    	for ( let value in get_nov ) {
    		
    		display_data( get_nov, 10, value );

    	}

    	for ( let value in get_dem ) {
    		
    		display_data( get_dem, 11, value );

    	}

    	if ( i === 1 ) {

    		preloader_func();

    		window.scrollTo( 0, 0 );
    		window.scrollTo( 0, year_h_1[ i ].getBoundingClientRect().y 
    						- height_header - height_select_date - 5 );
    	}

    	if ( i === 2 ) {

    		get_description( calendar, 'li' );

    	}

    }
}

function get_info( slug, year_input ) {
    let xml_info = new XMLHttpRequest();
            
    xml_info.open( 'GET', url + 'api/years.json?city=' + slug.id + '&value[]=' + 
    	                  ( now_year - 1 ) + '&value[]=' + now_year + '&value[]=' + (now_year + 1));
    xml_info.responseType = 'json';
    xml_info.setRequestHeader( 'Content-Type', 'application/json' );
    info_server.innerHTML = 'Получаем данные...';

    not_connection( xml_info, 
					calendar, 
					'<h3>Ошибка! Нет соединения с сервером!</h3>' +
                    '<h4><i>Возможные причины:</i></h4>' +
                    '<span class="d-block">- плохое соединение с интернетом;</span>' +
                    '<span class="d-block">- не подключена служба VPN</span>', 
					'index_get_info', 
					'calendar', 
					inner_get_info, 
					index_get_info );

    timeout( xml_info, 
			 calendar, 
			 '<h3>Время ожидания запроса истекло!</h3>' +
			 '<h4><i>Возможные причины:</i></h4>' +
			 '<span class="d-block">- плохое соединение с интернетом;</span>' +
			 '<span class="d-block">- не подключена служба VPN</span>', 
			 'index_get_info', 
			 'calendar', 
			 inner_get_info, 
			 index_get_info );
    
    xml_info.onload = function() {
        select_get_info = xml_info.response;

        inner_get_info( select_get_info );
        
    }

    xml_info.send();

}

function get_van_year_info( slug, year_input ) {
	let xml_van_year = new XMLHttpRequest();
            
    xml_van_year.open( 'GET', url + 'api/years.json?city=' + slug.id + '&value=' + year_input );
    xml_van_year.responseType = 'json';
    xml_van_year.setRequestHeader( 'Content-Type', 'application/json' );

    not_connection( xml_van_year, 
					calendar, 
					'<h3>Ошибка! Нет соединения с сервером!</h3>' +
                    '<h4><i>Возможные причины:</i></h4>' +
                    '<span class="d-block">- плохое соединение с интернетом;</span>' +
                    '<span class="d-block">- не подключена служба VPN</span>', 
					'index_get_info', 
					'calendar', 
					inner_get_info, 
					index_get_info );

    timeout( xml_van_year, 
			 calendar, 
			 '<h3>Время ожидания запроса истекло!</h3>' +
			 '<h4><i>Возможные причины:</i></h4>' +
			 '<span class="d-block">- плохое соединение с интернетом;</span>' +
			 '<span class="d-block">- не подключена служба VPN</span>', 
			 'index_get_info', 
			 'calendar', 
			 inner_get_info, 
			 index_get_info );

    li_too_id.length = 0;
    
    xml_van_year.onload = function() {
    	let van_year_response = xml_van_year.response,
    		get_year = van_year_response[ 0 ].value,
            get_jan = van_year_response[ 0 ].jan,
            get_feb = van_year_response[ 0 ].feb,
            get_mar = van_year_response[ 0 ].mar,
            get_apr = van_year_response[ 0 ].apr,
            get_may = van_year_response[ 0 ].may,
            get_jun = van_year_response[ 0 ].jun,
            get_jul = van_year_response[ 0 ].jul,
            get_aug = van_year_response[ 0 ].aug,
            get_sem = van_year_response[ 0 ].sem,
            get_oct = van_year_response[ 0 ].oct,
            get_nov = van_year_response[ 0 ].nov,
            get_dem = van_year_response[ 0 ].dem,
            calendar_van_year,
            object_ekadashi,
			calendar_ul_li,
            id_li,
			year_content =  '<h1 class="year_select_date year_h_1 m-b-0">' + get_year + '</h1>' +
						    '<div class="calendar_year d-flex">' +
						   	   '<ul class="jan"></ul>' +
							   '<ul class="feb"></ul>' +
							   '<ul class="mar"></ul>' +
							   '<ul class="apr"></ul>' +
							   '<ul class="may"></ul>' +
							   '<ul class="jun"></ul>' +
							   '<ul class="jul"></ul>' +
							   '<ul class="aug"></ul>' +
							   '<ul class="sem"></ul>' +
							   '<ul class="oct"></ul>' +
							   '<ul class="nov"></ul>' +
							   '<ul class="dem"></ul>' +
							'</div>';

        if ( select_year || top_scroll ) {

			if ( select_year ) {
				calendar.innerHTML = year_content;
				calendar.append( height_footer);
			} else if ( top_scroll ) {
				calendar.insertAdjacentHTML( 'afterbegin', year_content );
			}
			
			calendar.prepend( plus_block );
			div_calendar = calendar.querySelectorAll( '.calendar_year' );
			calendar_van_year = document.querySelector( '.calendar_year' );
		} else if ( bottom_scroll ) {
			calendar.insertAdjacentHTML( 'beforeend', year_content );
			calendar.append( height_footer );
			div_calendar = calendar.querySelectorAll( '.calendar_year' );
			calendar_van_year = div_calendar[ div_calendar.length - 1 ];
			setTimeout( () => document.body.style.overflow = 'auto', 1000 );
		}

		let calendar_van_year_ul = calendar_van_year?.getElementsByTagName( 'ul' ),
		count_month = 0;

		calendar.style.cssText = '';
		min_preloader.style.cssText = '';
		min_preloader.remove();

		if ( calendar_van_year_ul) {

			for ( let ul of calendar_van_year_ul ) {
				first_day_month = new Date( get_year, count_month, 1 ).getDay();
				month_days = new Date( get_year, count_month + 1, 0 ).getDate();
				ul.innerHTML = '<h3 class="m-b-10 m-t-30">' + month_name[ count_month ] + '</h3>';

				if ( first_day_month === 0 ) {
					first_day_month = 7;
				}

				for ( let i = 1; i < first_day_month; i++ ) {
					ul.innerHTML += '<li></li>';
				}

				for ( let i = 1; i < ( month_days + 1 ); i++) {
					ul.innerHTML += '<li class="text-center pos-rel">' + i + '</li>';
				}

				count_month++;

			}

		}

        function display_data( get_month, numb_ul, value ) {

			if ( calendar_van_year_ul) {
        		calendar_ul_li = calendar_van_year_ul[ numb_ul ]?.getElementsByTagName( 'li' )
			}
        	
			let class_li;

        	if ( typeof( get_month[ value ] ) === 'object' ) {

        		object_ekadashi = Object.values( get_month[ value ] );
        		class_li = 'ekadashi';

	        	if ( Array.isArray( object_ekadashi ) ) {

					if ( object_ekadashi[ 1 ] === 'Putrada' ) {
	                    id_li = 'putrada'; 
	                } else if ( object_ekadashi[ 1 ] === 'Sat-tila' ) {
	                    id_li = 'sat-tila'; 
	                } else if ( object_ekadashi[ 1 ] === 'Bhaimi' ) {
	                    id_li = 'bhaimi'; 
	                } else if ( object_ekadashi[ 1 ] === 'Vijaya' ) {
	                    id_li = 'vijaya'; 
	                } else if ( object_ekadashi[ 1 ] === 'Amalaki vrata' ) {
	                    id_li = 'amalaki'; 
	                } else if ( object_ekadashi[ 1 ] === 'Papamocani' ) {
	                    id_li = 'papamocani'; 
	                } else if ( object_ekadashi[ 1 ] === 'Kamada' ) {
	                    id_li = 'kamada'; 
	                } else if ( object_ekadashi[ 1 ] === 'Varuthini' ) {
	                    id_li = 'varuthini'; 
	                } else if ( object_ekadashi[ 1 ] === 'Mohini' ) {
	                    id_li = 'mohini'; 
	                } else if ( object_ekadashi[ 1 ] === 'Apara' ) {
	                    id_li = 'apara'; 
	                } else if ( object_ekadashi[ 1 ] === 'Pandava Nirjala' ) {
	                    id_li = 'pandava'; 
	                } else if ( object_ekadashi[ 1 ] === 'Yogini' ) {
	                    id_li = 'yogini'; 
	                } else if ( object_ekadashi[ 1 ] === 'Sayana' ) {
	                    id_li = 'sayana'; 
	                } else if ( object_ekadashi[ 1 ] === 'Kamika' ) {
	                    id_li = 'kamika'; 
	                } else if ( object_ekadashi[ 1 ] === 'Pavitropana' ) {
	                    id_li = 'pavitra'; 
	                } else if ( object_ekadashi[ 1 ] === 'Annada' ) {
	                    id_li = 'annada'; 
	                } else if ( object_ekadashi[ 1 ] === 'Parsva' ) {
	                    id_li = 'parsva'; 
	                } else if ( object_ekadashi[ 1 ] === 'Indira' ) {
	                    id_li = 'indira'; 
	                } else if ( object_ekadashi[ 1 ] === 'Padmini' ) {
	                    id_li = 'padmini'; 
	                } else if ( object_ekadashi[ 1 ] === 'Parama' ) {
	                    id_li = 'parama'; 
	                } else if ( object_ekadashi[ 1 ] === 'Pasankusa' ) {
	                    id_li = 'pasankusa'; 
	                } else if ( object_ekadashi[ 1 ] === 'Rama' ) {
	                    id_li = 'rama-ekadashi'; 
	                } else if ( object_ekadashi[ 1 ] === 'Utthana' ) {
	                    id_li = 'utthana'; 
	                } else if ( object_ekadashi[ 1 ] === 'Moksada' ) {
	                    id_li = 'moksada'; 
	                } else if ( object_ekadashi[ 1 ] === 'Saphala' ) {
	                    id_li = 'saphala'; 
	                } else if ( object_ekadashi[ 1 ] === 'Utpanna' ) {
	                    id_li = 'utpanna'; 
	            	} 
	            }

        	} else if (typeof(get_month[value]) === 'string') {

        		if (get_month[value] === '1') {
        			class_li = 'nityananda';
        			id_li = 'nityananda';
        		} else if (get_month[value] === '2') {
        			class_li = 'chaytanya';
        			id_li = 'chaytanya';
        		} else if (get_month[value] === '3') {
        			class_li = 'rama';
        			id_li = 'sita';
        		} else if (get_month[value] === '4') {
        			class_li = 'nrisimha';
        			id_li = 'nrisimha';
        		} else if (get_month[value] === '6') {
        			class_li = 'balarama';
        			id_li = 'baladeva';
        		} else if (get_month[value] === '7') {
        			class_li = 'krishna';
        			id_li = 'krishna';
        		} else if (get_month[value] === '8') {
        			class_li = 'bhaktivedanta';
        			id_li = 'bhaktivedanta';
        		} else if (get_month[value] === '9') {
        			class_li = 'radharany';
        			id_li = 'radharany';
        		} else if (get_month[value] === 'A') {
        			class_li = 'govardhana';
        			id_li = 'govardhana';
        		} else if (get_month[value] === 'B') {
        			class_li = 'radha-yatra';
        			id_li = 'radha-yatra';
        		}

        	}

			if ( calendar_ul_li ) {

				for ( let li of calendar_ul_li ) {

					if ( ( li.textContent) === value ) {
						li.classList.toggle( class_li );
						li.id = id_li;
					}

					if ( get_month === get_jun ) {

						if ( ( li.textContent) === '14' ) {
							li.classList.add( 'vyasapudja' );

							if ( li.hasAttribute( 'id' ) ) {
								let attr = li.getAttribute( 'id' );

								if ( ( attr !== 'vyasapudja' ) && ( !attr.includes( 'vyasapudja' ) ) ) {
									li.setAttribute( 'id', attr + '_' + 'vyasapudja' );
									li.classList.add( 'too_id' );
								}
								
							} else {
								li.id = 'vyasapudja';
							}

						}

					}

					if ( get_month === get_dem ) {

						if ( ( li.textContent ) === '25' ) {
							li.classList.add( 'rozhdestvo' );

							if ( li.hasAttribute( 'id' ) ) {
								let attr = li.getAttribute( 'id' );

								if ( ( attr !== 'rozhdestvo' ) && ( !attr.includes( 'rozhdestvo' ) ) ) {
									li.setAttribute( 'id', attr + '_' + 'rozhdestvo' );
									li.classList.add( 'too_id' );
								}

							} else {
								li.id = 'rozhdestvo';
							}

						}

					}
				}

			}

        }

    	for ( let value in get_jan ) {

    		display_data( get_jan, 0, value );

    	}

    	for ( let value in get_feb ) {
    		
    		display_data( get_feb, 1, value );

    	}

    	for ( let value in get_mar ) {
    		
    		display_data( get_mar, 2, value );

    	}

    	for ( let value in get_apr ) {
    		
    		display_data( get_apr, 3, value );

    	}

    	for ( let value in get_may ) {
    		
    		display_data( get_may, 4, value );

    	}

    	for ( let value in get_jun ) {
    		
    		display_data( get_jun, 5, value );

    	}

    	for ( let value in get_jul ) {
    		
    		display_data( get_jul, 6, value );

    	}

    	for ( let value in get_aug ) {
    		
    		display_data( get_aug, 7, value );

    	}

    	for ( let value in get_sem ) {
    		
    		display_data( get_sem, 8, value );

    	}

    	for ( let value in get_oct ) {
    		
    		display_data( get_oct, 9, value );

    	}

    	for ( let value in get_nov ) {
    		
    		display_data( get_nov, 10, value );

    	}

    	for ( let value in get_dem ) {
    		
    		display_data( get_dem, 11, value );

    	}

		if ( select_year || top_scroll ) {

    		window.scrollTo( 0, 15 );

			if ( select_year ) {
				select_year = false;
				not_scroll = true;
			} else if ( top_scroll ) {
				top_scroll = false;
			}
			
		} else if ( bottom_scroll ) {

			let coord = year[ year.length - 1 ].getBoundingClientRect().y - height_header 
						- height_select_date - 5;
			window.scrollBy( 0, coord );
			bottom_scroll = false;
			not_scroll = true;
		}

		setTimeout( () => document.body.style.overflow = 'auto', 1000 );

		let all_li = calendar.querySelectorAll( 'li' ),
			too_events = document.querySelectorAll( '.too_events' );

    	if ( too_events.length > 0 ) {

    		for ( let li of all_li ) {

    			if ( li.classList.contains( 'too_id' ) ) {
    				li_too_id.push( li );
    			}

    		}

    		if ( li_too_id.length > 0 ) {

    			for ( let li_id of li_too_id ) {

    				event_year = li_id.closest( '.calendar_year' ).previousElementSibling.textContent;
    				event_year = 'year_' + event_year;

    				for ( let div of too_events ) {

    					if ( div.classList.contains( li_id.id ) ) {

    						for ( let name of div.classList ) {

    							if ( name.includes( 'year' ) ) {
    								name_class = name;
    							}

    						}

    						if ( event_year !== name_class ) {
    							continue;
    						}

    						coords = li_id.getBoundingClientRect();

    						div.style.left = '0';

    						get_coords_left( div, li_id.id, li_id.id, 0, style_tag = false );
    					
    					}
    				}

    			}
    		} 

    	}

    	get_description( calendar, 'li' );

    }

    xml_van_year.send();
}

function get_cities( func ) {

	let xml_cities = new XMLHttpRequest();
	    xml_cities.open( 'GET', url + 'api/cities.json' );
	    xml_cities.responseType = 'json';
	    xml_cities.setRequestHeader( 'Content-Type', 'application/json' );

	not_connection( xml_cities, 
					calendar, 
					'<h3>Ошибка! Нет соединения с сервером!</h3>' +
                    '<h4><i>Возможные причины:</i></h4>' +
                    '<span class="d-block">- плохое соединение с интернетом;</span>' +
                    '<span class="d-block">- не подключена служба VPN</span>', 
					'index_get_info', 
					'calendar', 
					inner_get_info, 
					index_get_info ); 

    timeout( xml_cities, 
			 calendar, 
			 '<h3>Время ожидания запроса истекло!</h3>' +
			 '<h4><i>Возможные причины:</i></h4>' +
			 '<span class="d-block">- плохое соединение с интернетом;</span>' +
			 '<span class="d-block">- не подключена служба VPN</span>', 
		 	 'index_get_info', 
		 	 'calendar', 
		 	 inner_get_info, 
		 	 index_get_info );

	xml_cities.onload = function() {
	    get_cities_array = xml_cities.response;
	    slug = get_cities_array.find( item => item.name === city );
        info_server.innerHTML = 'Проверка местоположения...';

		func( slug, year_input );
	}

	xml_cities.send();
}

function get_info_scroll() { 
	
	if ( not_scroll ) {
		document_height = Math.max(
						document.body.scrollHeight, 
						document.documentElement.scrollHeight,
						document.body.offsetHeight, 
						document.documentElement.offsetHeight,
						document.body.clientHeight, 
						document.documentElement.clientHeight
					);

		if ( ( ( window.pageYOffset + scroll_window_height ) === document_height ) || 
			( ( Math.ceil( window.pageYOffset + scroll_window_height ) ) === document_height ) ||
			( ( Math.floor( window.pageYOffset + scroll_window_height ) ) === document_height ) ) {

			year_input = +( year[ year.length - 1 ]?.textContent ) + 1;

			if ( year_input > max_year ) {
				
				( year[ year.length - 1 ]?.nextElementSibling )?.insertAdjacentHTML( 'afterend',  
																'<div class="not_data text-center' +
																' bold m-b-20 m-t-20">' +
																'<span>За ' + year_input + 
																' год, нет данных</span>' +
																'</div>' );
				let div_not_data = document.getElementsByClassName( 'not_data' );

				window.scrollBy( 0, div_not_data[ 0 ].clientHeight );

				if ( div_not_data.length > 1 ) {
					div_not_data[ div_not_data.length - 1 ].remove();
				}

				return false;
			}

			document.body.style.overflow = 'hidden';
			bottom_scroll = true;
			not_scroll = false;
			setTimeout( () => {
				( year[ year.length - 1 ]?.nextElementSibling )?.after( min_preloader );
				span_year_input = document.getElementById( 'year_input' );
		
				if ( span_year_input ) span_year_input.remove();

				min_preloader.style.padding = '40px 0 20px';
				min_preloader.insertAdjacentHTML( 'beforeend', '<span id="year_input"'  +
																	 'class="text-center d-block' +  ' m-t-10">' +
																  '<small>' +
																	'Загружаем - ' + year_input + 
																	' год' +
																'</small>' +
																'</span>' );
				document_height = Math.max( document.body.scrollHeight, 
											document.documentElement.scrollHeight, 
											document.body.offsetHeight, 
											document.documentElement.offsetHeight,
											document.body.clientHeight, 
											document.documentElement.clientHeight
											);
				document.body.style.overflow = 'auto';
				window.scrollTo( 0, document_height );
				document.body.style.overflow = 'hidden';
				
				 get_cities( get_van_year_info );

			}, 500 );

		} else if ( window.pageYOffset === 0 ) {
			year_input = year[ 0 ].textContent - 1;

			if ( year_input < min_year ) {
				year[ 0 ].insertAdjacentHTML( 'beforebegin', '<div class="not_data text-center' +
																' bold m-b-20 m-t-20">' +
																'<span>За ' + year_input + 
																' год, нет данных</span>' +
																'</div>' );
				let div_not_data = document.getElementsByClassName( 'not_data' );

				if ( div_not_data.length > 1 ) {
					div_not_data[ div_not_data.length - 1 ].remove();
				}

				return false;
			}

			top_scroll = true;
			document.body.style.overflow = 'hidden';
			min_preloader.style.paddingTop = '20px';
			year[ 0 ].before( min_preloader );
			span_year_input = document.getElementById( 'year_input' );

			if ( span_year_input ) span_year_input.remove();

			min_preloader.insertAdjacentHTML( 'beforeend', '<span id="year_input"'  +
																	 'class="text-center d-block' +  ' m-t-10">' +
																  '<small>' +
																	'Загружаем - ' + year_input + 
																	' год' +
																'</small>' +
																'</span>' );

			get_cities( get_van_year_info );

		}

	}

}

function get_info_scroll_event() {
	window.addEventListener( 'scroll', get_info_scroll );
}

input_select_date.oninput = function() {
	let input_value = input_select_date.value,
		hint_1 = document.getElementById( 'hint_1' ),
		hint_2 = document.getElementById( 'hint_2' ),
		too_events = document.querySelectorAll( '.too_events' );

	if ( input_value.length === 2 ) {

		if ( ( input_value < 19 ) || ( input_value > 20 ) ) {

			if ( hint_2.classList.contains( 'visible_hint' ) ) {
				hint_2.classList.remove( 'visible_hint' );
			}

			hint_1.classList.add( 'visible_hint');
			setTimeout( () => hint_1.classList.remove( 'visible_hint' ), 6000 );
		}

		if ( input_value < 19 ) {
			input_select_date.value = '19';
		} else if ( input_value > 20 ) {
			input_select_date.value = '20';
		}

	} else if ( input_value.length === 4 ) {

		if ( ( input_value >= min_year ) && ( input_value <= max_year ) ) {
			year_input = input_value;
			not_scroll = false;
			select_year = true;
			calendar.innerHTML = '';
			calendar.style.cssText = 'height: ' + ( scroll_window_height - 
				height_header -
				height_select_date -
				footer_id.clientHeight ) + 'px;' +
				'margin-top: ' + height_select_date + 'px;';
			min_preloader.style.cssText = 'position: absolute;' +
					'top: 50%;' + 
					'left: 50%;' + 
					'transform: translate(-50%, -50%);' +
					'margin: 0';
			calendar.append( min_preloader );
			span_year_input = document.getElementById( 'year_input' );
		
			if ( span_year_input ) span_year_input.remove();

			min_preloader.insertAdjacentHTML( 'beforeend', '<span id="year_input"'  +
																	 'class="text-center d-block' +  ' m-t-10">' +
																  '<small>' +
																	'Загружаем - ' + year_input + 
																	' год' +
																'</small>' +
																'</span>' );
			
			get_cities( get_van_year_info );

		} else {

			if ( hint_1.classList.contains( 'visible_hint' ) ) {
				hint_1.classList.remove( 'visible_hint' );
			}

			hint_2.classList.add( 'visible_hint' );
			setTimeout( () => hint_2.classList.remove( 'visible_hint' ), 6000 );
			input_select_date.value = input_value.slice( 0, 2 );

		}

		if ( too_events.length > 0 ) {

			for ( let elem of too_events ) {
				elem.remove();
			}

		}

		if ( arr_events.length > 0 ) {
			arr_events.length = 0;
		}

	} else if ( input_value.length > 4 ) {
		input_select_date.value = input_value.slice( 0, 4 );
	}
}

open_list_years.onclick = function() {

	let too_events = document.querySelectorAll( '.too_events' );
	document.body.style.overflow = 'hidden';

	if ( input_select_date.value !== '' ) {
		input_select_date.value = '';
	}

	list_all_years.style.cssText = 'opacity: 1; z-index: 5;';

	list_all_years.onclick = function( event ) {

		if ( event.target.tagName === 'DIV' ) {
			return false;
		} else if ( event.target.tagName === 'SPAN' ) {
			year_input = ( event.target ).textContent;
			not_scroll = false;
			select_year = true;
			calendar.innerHTML = '';
			calendar.style.cssText = 'height: ' + ( scroll_window_height - 
									  height_header -
									  height_select_date -
									  footer_id.clientHeight ) + 'px;' +
									  'margin-top: ' + height_select_date + 'px;';
			min_preloader.style.cssText = 'position: absolute;' +
										  'top: 50%;' + 
										  'left: 50%;' + 
										  'transform: translate(-50%, -50%);' +
										  'margin: 0';
			calendar.append( min_preloader );
			span_year_input = document.getElementById( 'year_input' );
		
			if ( span_year_input ) span_year_input.remove();

			min_preloader.insertAdjacentHTML( 'beforeend', '<span id="year_input"'  +
																	 'class="text-center d-block' +  ' m-t-10">' +
																  '<small>' +
																	'Загружаем - ' + year_input + 
																	' год' +
																  '</small>' +
																'</span>' );

			get_cities( get_van_year_info );

			list_all_years.style.cssText = '';
		}

		if ( too_events.length > 0 ) {

			for ( let elem of too_events ) {
				elem.remove();
			}

		}

		if ( arr_events.length > 0 ) {
			arr_events.length = 0;
		}
	}
}

close_list_years.onclick = function(event) {
	event.stopPropagation();
	list_all_years.style.cssText = '';
	document.body.style.overflow = 'auto';
}

let elem;

window.addEventListener( 'scroll', function() {

	let elem_center = document.elementsFromPoint( ( window_width / 2 ) / 2, window_height / 2 ),
		count_elem = 0;

	for ( elem of elem_center ) {

		if ( count_elem < 2 ) {

			if ( elem.tagName === 'H3' ) {
				return elem;
			} else if ( elem.tagName === 'LI' ) {
				elem = elem.parentElement;
				return elem;
			} else if ( elem.tagName === 'H1' ) {
				return elem;
			} else if ( elem.tagName === 'UL' ) {
				return elem;
			}

		}

		count_elem++;
	}

});

plus.onclick = function( event ) {

	if (plus.classList.contains('zoom_show')) {
		plus.classList.remove('zoom_show');
		plus.classList.add('zoom_hide');
	}

	if (minus.classList.contains('zoom_hide')) {
		minus.classList.remove('zoom_hide');
		minus.classList.add('zoom_show');
	}

	let zoom_plus_elem = elem,
		too_events = document.querySelectorAll('.too_events'),
		all_li = calendar.querySelectorAll('li');

	calendar.style.opacity = '0';
	li_too_id.length = 0;

	if (too_events.length > 0) {

		for (let li of all_li) {

			if (li.classList.contains('too_id')) {
				li_too_id.push(li);
			}

		}

	}

	setTimeout(function() { 
				calendar.classList.add('zoom_calendar');
			  }, 400);

	setTimeout(function() { window.scrollTo(0, (window.pageYOffset + 
												zoom_plus_elem.getBoundingClientRect().y) -
												height_header - height_select_date);
							calendar.style.cssText = '';

							if (li_too_id.length > 0) {

								for (let li_id of li_too_id) {

									event_year = li_id.closest('.calendar_year').
												 previousElementSibling.textContent;
									let event_year_2 = 'year_' + event_year;

									for (let div of too_events) {

										delete_div = div.querySelector('i');

										if (div.classList.contains(li_id.id)) {

											for (let name of div.classList) {

												if (name.includes('year')) {
													name_class = name;
												}

											}

											if (event_year_2 !== name_class) {
												continue;
											}

											for (let child of div.children) {

												if (child.tagName === 'STYLE') {
													
													if ((child.innerHTML).includes('zoom_events')) {
														style_tag = false;
													}
												}

											}

											coords = li_id.getBoundingClientRect();
											div.classList.add('zoom_events');
											delete_div.classList.add('zoom_delete');

											delete_div.style.fontSize = '26px';
											div.style.fontSize = '22px';

											div.style.left = '0';

											get_coords_left(div, '.' + li_id.id + '.' + name_class +
															'.zoom_events', '.' + li_id.id + '_' +  
															event_year + '.zoom_delete', -15, 
															style_tag);

											style_tag = true;
										
										}
									}

								}
							} 

						  }, 1000);

}

minus.onclick = function( event ) {

	if (minus.classList.contains('zoom_show')) {
		minus.classList.remove('zoom_show');
		minus.classList.add('zoom_hide');
	}

	if (plus.classList.contains('zoom_hide')) {
		plus.classList.remove('zoom_hide');
		plus.classList.add('zoom_show');
	}

	let zoom_minus_elem = elem,
		too_events = document.querySelectorAll('.too_events'),
		all_li = calendar.querySelectorAll('li');

	li_too_id.length = 0;
	calendar.style.opacity = '0';

	if (too_events.length > 0) {

		for (let li of all_li) {

			if (li.classList.contains('too_id')) {
				li_too_id.push(li);
			}

		}

	}

	setTimeout(function() { 
				calendar.classList.remove('zoom_calendar');
				window.scrollTo(0, 100);
			  }, 400);

	setTimeout(function() { 

					if ((document_height - scroll_window_height) > 
						(window.pageYOffset + zoom_minus_elem.getBoundingClientRect().y -
										height_header - height_select_date)) {

						window.scrollTo(0, (window.pageYOffset + zoom_minus_elem.getBoundingClientRect().y) -
										height_header - height_select_date);
						calendar.style.cssText = '';

					} else if ((document_height - scroll_window_height) <= 
						(window.pageYOffset + zoom_minus_elem.getBoundingClientRect().y -
										height_header - height_select_date)) {

						window.scrollTo(0, document_height - scroll_window_height - 60);
						calendar.style.cssText = '';

					}

					if (li_too_id.length > 0) {

						for (let li_id of li_too_id) {

							event_year = li_id.closest('.calendar_year').
										 previousElementSibling.textContent;

							for (let div of too_events) {

								if (div.classList.contains(li_id.id)) {

									coords = li_id.getBoundingClientRect();
									delete_div = div.querySelector('i');
									div.classList.remove('zoom_events');
									delete_div.classList.remove('zoom_delete');
									div.style.fontSize = 'inherit';
									delete_div.style.fontSize = '22px';

									let count_child = 0;

									for (let child of div.children) {

										if (child.tagName === 'STYLE') {
													
											count_child++;

										}

									}

									if (count_child === 1) {
										style_tag = true;
									} else if (count_child > 1) {
										style_tag = false;
									}

									get_coords_left(div, '.' + li_id.id, '.' + li_id.id + '_' +  
													event_year, -10, style_tag);
								
								}
							}

						}
					} 

				}, 1000);

}


if ( navigator?.connection?.type !== 'none' ) {

	if ( ( localStorage.getItem( 'index_get_info' ) !== null ) && ( +localStorage.getItem( 'now_year' ) === now_year ) ) {
	                    
	    index_get_info = JSON.parse( localStorage.getItem( 'index_get_info' ) );
    	info_server.innerHTML = 'Получаем данные из кэша...';
	        
	    inner_get_info( index_get_info );
	            
	} else {
	    
	    localStorage.setItem( 'now_year', now_year );
	    
	    get_cities( get_info );
	    
	}

} else {

    content_not_connection( calendar, 
                            '<h3>Нет соединения или слабое соединение с интернетом!</h3>', 
                            'index_get_info', 
							'calendar', 
                            inner_get_info, 
                            index_get_info );

}

setTimeout( get_info_scroll_event, 1000 );


