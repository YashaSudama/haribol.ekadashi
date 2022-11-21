"use strict"

// !!! работа уведомлений: Android(cordova) - версия платформы от 9 (смотреть в package.json), IOS - 5

function work_settings_notifications() {
    
    height_footer_func();
    
    let main_notifications = document.getElementById( 'main_notifications' ),
        nearest_event = document.getElementById( 'nearest_event' ),
        day_notifications = document.getElementById( 'day_notifications' ),
        time_notifications = document.getElementById( 'time_notifications' ),
        status_notifications_div = document.getElementById( 'status_notifications' ),
        home = document.getElementById( 'home' ),
        check_exit_page = document.getElementById( 'check_exit_page' ),
        ok_transition = document.getElementById( 'ok_transition' ),
        remain = document.getElementById( 'remain' ),
        hr_hide = main_notifications.getElementsByClassName( 'hr-hide' ),
        city;
	
    min_preloader.style = 'margin: 5px 0 0 20px';
    form.time.value = info_notifications.time;

    if ( info_notifications.day === 0 ) {
        form.get_notifications[ 2 ].checked = true;
    } else if ( info_notifications.day === 1 ) {
        form.get_notifications[ 1 ].checked = true;
    } else {
        form.get_notifications[ 0 ].checked = true;
    }

    if ( localStorage.getItem( 'status_notifications' ) === 'false' ) { 
        day_notifications.style.cssText = 'opacity: 0; display: none';
        time_notifications.style.cssText = 'opacity: 0; display: none';
        hr_hide[ 0 ].style.cssText = 'opacity: 0; display: none';
        hr_hide[ 1 ].style.cssText = 'opacity: 0; display: none';
        status_notifications_div.children[ 0 ].innerHTML = 'Включить уведомления';
        form.status_notifications.dataset.status = false;
        status_notifications = false;
    } else {
        status_notifications = true;
    }

    if ( localStorage.getItem( 'city_name' ) && 
         localStorage.getItem( 'index_get_info' ) ) {

        city = localStorage.getItem( 'city_name' );
        location_span.innerHTML = city;

        let info = JSON.parse( localStorage.getItem( 'index_get_info' ) ),
            arr_info = [ info[1].jan,
                         info[1].feb,
                         info[1].mar,
                         info[1].apr,
                         info[1].may,
                         info[1].jun,
                         info[1].jul,
                         info[1].aug,
                         info[1].sem,
                         info[1].oct,
                         info[1].nov,
                         info[1].dem ],
            curr_month = arr_info[ now_month ],
            next_month,
            name_event,
            count_events = 0;
        
        if ( now_month === 5 ) {

            curr_month = Object.entries( curr_month );
            
            for ( let i = 0; i < curr_month.length; i++ ) {
                
                if ( curr_month[ i ][ 0 ] <= 14 ) {

                    if ( curr_month[ i + 1 ] ) {

                        if ( curr_month[ i + 1 ][ 0 ] > 14 ) {
                            curr_month.splice( i + 1, 0, [ '14', 'V' ] );
                            break;
                        }

                    } else {
                        curr_month.splice( i + 1, 0, [ '14', 'V' ] );
                        break;
                    }

                }
                
            }

            curr_month = Object.fromEntries( curr_month );

        } else if ( now_month === 11 ) {
            
            curr_month = Object.entries( curr_month );
            
            for ( let i = 0; i < curr_month.length; i++ ) {
                
                if ( curr_month[ i ][ 0 ] <= 25 ) {

                    if ( curr_month[ i + 1 ] ) {

                        if ( curr_month[ i + 1 ][ 0 ] > 25 ) {
                            curr_month.splice( i + 1, 0, [ '25', 'R' ] );
                            break;
                        }

                    } else {
                        curr_month.splice( i + 1, 0, [ '25', 'R' ] );
                        break;
                    }

                }
                
            }

            curr_month = Object.fromEntries( curr_month );

        }
            
        if ( now_month === 11 ) {
            next_month = info[ 2 ].jan;
        } else {
            next_month = arr_info[ now_month + 1 ];
        } 

        function event_init( obj, key ) {

            if ( typeof( obj[ key ] ) === 'object' ) {
                name_event = obj[ key ].ekadasi_name;

                if ( name_event === 'Putrada' ) {
                    name_event = 'Путрада';
                } else if ( name_event === 'Sat-tila' ) {
                    name_event = 'Шат-тила';
                } else if ( name_event === 'Bhaimi' ) {
                    name_event = 'Джая (Бхаими)';
                } else if ( name_event === 'Vijaya' ) {
                    name_event = 'Виджая';
                } else if ( name_event === 'Amalaki vrata' ) {
                    name_event = 'Амалаки';
                } else if ( name_event === 'Papamocani' ) {
                    name_event = 'Папа-мочани';
                } else if ( name_event === 'Kamada' ) {
                    name_event = 'Камада';
                } else if ( name_event === 'Varuthini' ) {
                    name_event = 'Варутхини';
                } else if ( name_event === 'Mohini' ) {
                    name_event = 'Мохини';
                } else if ( name_event === 'Apara' ) {
                    name_event = 'Апара';
                } else if ( name_event === 'Pandava Nirjala' ) {
                    name_event = 'Нирджала ( Пандава, Бхима )';
                } else if ( name_event === 'Yogini' ) {
                    name_event = 'Йогини';
                } else if ( name_event === 'Sayana' ) {
                    name_event = 'Дева-шаяни ( Падма )';
                } else if ( name_event === 'Kamika' ) {
                    name_event = 'Камика';
                } else if ( name_event === 'Pavitropana' ) {
                    name_event = 'Павитра';
                } else if ( name_event === 'Annada' ) {
                    name_event = 'Аннада (Аджа)';
                } else if ( name_event === 'Parsva' ) {
                    name_event = 'Паршва';
                } else if ( name_event === 'Indira' ) {
                    name_event = 'Индира';
                } else if ( name_event === 'Padmini' ) {
                    name_event = 'Падмини';
                } else if ( name_event === 'Parama' ) {
                    name_event = 'Парама';
                } else if ( name_event === 'Pasankusa' ) {
                    name_event = 'Пашанкуша';
                } else if ( name_event === 'Rama' ) {
                    name_event = 'Рама'; 
                } else if ( name_event === 'Utthana' ) {
                    name_event = 'Уттхана';
                } else if ( name_event === 'Moksada' ) {
                    name_event = 'Мокшада';
                } else if ( name_event === 'Saphala' ) {
                    name_event = 'Са-пхала';
                } else if ( name_event === 'Utpanna' ) {
                    name_event = 'Утпанна';
                }  

                name_event = name_event + ' Экадаши';

            } else if ( typeof( obj[ key ] ) === 'string' ) {
                name_event = obj[ key ];

                if ( name_event === '1' ) {
                    name_event = 'Явление, Нитьянандa Прабху';
                }  else if ( name_event === '2' ) {
                    name_event = 'Явление, Гаура-Пурнима, Шри Чайтанья Махапрабху';
                } else if ( name_event === '3' ) {
                    name_event = 'Явление, Рама Навами, Рамачандра';
                } else if ( name_event === '4' ) {
                    name_event = 'Явление, Наришимха';
                } else if ( name_event === 'V' ) {
                    name_event = 'Явление, Сиддхасварупананда Парамахамса';
                } else if ( name_event === '6' ) {
                    name_event = 'Явление, Баларама';
                } else if ( name_event === '7' ) {
                    name_event = 'Явление, Джанмастами, Кришна';
                } else if ( name_event === '8' ) {
                    name_event = 'Явление, Бхактиведанта Свами Прабхупада';
                } else if ( name_event === '9' ) {
                    name_event = 'Явление, Радхастами, Шримати Радхарани';
                } else if ( name_event === 'A' ) {
                    name_event = 'Говардхан-пуджа';
                } else if ( name_event === 'B' ) {
                    name_event = 'Ратха-ятра';
                } else if ( name_event === 'R' ) {
                    name_event = 'Рождество, Иисус Христос';
                }

            }
            
        }

        for ( let key in curr_month ) {

            if ( +key >= now_date_number ) {

                event_init( curr_month, key );
                
                if ( +key === now_date_number ) {
                    count_events++;
                    nearest_event.innerHTML += '<div class="d-flex l-height-1-25 m-b-20">' + 
                                                    '<span class="d-flex info_event">' + 
                                                        '<span class="bold d-block day_event">' + 
                                                            key + ' ' + month_name_header[ now_month ] + ' - ' +
                                                        '</span>' +
                                                        '<span class="d-block name_event">' +
                                                            name_event + 
                                                        '</span>' +
                                                    '</span>' +
                                                    '<span class="specification">Сегодня</span>' +
                                               '</div>';
                } else if ( ( +key - now_date_number ) === 1 ) {
                    count_events++;
                    nearest_event.innerHTML += '<div class="d-flex l-height-1-25 m-b-20">' + 
                                                    '<span class="d-flex info_event">' + 
                                                        '<span class="bold d-block day_event">' + 
                                                            key + ' ' + month_name_header[ now_month ] + ' - ' +
                                                        '</span>' +
                                                        '<span class="d-block name_event">' +
                                                            name_event + 
                                                        '</span>' +
                                                    '</span>' +
                                                    '<span class="specification">Завтра</span>' +
                                                '</div>';
                } else if ( ( +key - now_date_number ) === 2  ) {
                    count_events++;
                    nearest_event.innerHTML += '<div class="d-flex l-height-1-25 m-b-20">' + 
                                                    '<span class="d-flex info_event">' + 
                                                        '<span class="bold d-block day_event">' + 
                                                            key + ' ' + month_name_header[ now_month ] + ' - ' +
                                                        '</span>' +
                                                        '<span class="d-block name_event">' +
                                                            name_event + 
                                                        '</span>' +
                                                    '</span>' +
                                                    '<span class="specification">Послезавтра</span>' +
                                                '</div>';
                }

            }

        }
        
        if ( ( month_days - now_date_number ) === 0 ) {

            for ( let key in next_month ) {

                if ( +key === 1 ) {
                    count_events++;

                    if ( now_month === 11 ) {
                        now_month = 0;
                    } else {
                        now_month += 1;
                    }

                    event_init( next_month, key );

                    nearest_event.innerHTML += '<div class="d-flex l-height-1-25 m-b-20">' + 
                                                    '<span class="d-flex info_event">' + 
                                                        '<span class="bold d-block day_event">' + 
                                                            key + ' ' + month_name_header[ now_month ] + ' - ' +
                                                        '</span>' +
                                                        '<span class="d-block name_event">' +
                                                            name_event + 
                                                        '</span>' +
                                                    '</span>' +
                                                    '<span class="specification">Завтра</span>' +
                                                '</div>';

                } else if ( +key === 2 ) {
                    count_events++;

                    event_init( next_month, key );

                    nearest_event.innerHTML += '<div class="d-flex l-height-1-25 m-b-20">' + 
                                                    '<span class="d-flex info_event">' + 
                                                        '<span class="bold d-block day_event">' + 
                                                            key + ' ' + month_name_header[ now_month ] + ' - ' +
                                                        '</span>' +
                                                        '<span class="d-block name_event">' +
                                                            name_event + 
                                                        '</span>' +
                                                    '</span>' +       
                                                    '<span class="specification">Послезавтра</span>' +
                                                '</div>';

                }

            }

        } else if ( ( month_days - now_date_number ) === 1 ) {

            for ( let key in next_month ) {

                if ( +key === 1 ) {
                    count_events++;

                    if ( now_month === 11 ) {
                        now_month = 0;
                    } else {
                        now_month += 1;
                    }

                    event_init( next_month, key );

                    nearest_event.innerHTML += '<div class="d-flex l-height-1-25 m-b-20">' + 
                                                   '<span class="d-flex info_event">' + 
                                                        '<span class="bold d-block day_event">' + 
                                                            key + ' ' + month_name_header[ now_month ] + ' - ' +
                                                        '</span>' +
                                                        '<span class="d-block name_event">' +
                                                            name_event + 
                                                        '</span>' +
                                                    '</span>' +
                                                    '<span class="specification">Послезавтра</span>' +
                                                '</div>';

                }

            }

        }

        if ( count_events === 0 ) {
            
            for ( let key in curr_month ) {
                
                if ( +key >= now_date_number ) { 

                    event_init( curr_month, key );
                    
                    count_events++;       
                    nearest_event.innerHTML += '<span class="d-block m-b-20">' + 
                                                    '<span class="bold">' +
                                                        key + ' ' + month_name_header[ now_month ] + 
                                                    '</span>' +
                                                    ' - ' + name_event + 
                                                '</span>';

                    break;

                }

            }

        }

        if ( count_events === 0 ) {
            
            for ( let key in next_month ) {

                if ( now_month === 11 ) {
                    now_month = 0;
                } else {
                    now_month += 1;
                }

                event_init( next_month, key );

                nearest_event.innerHTML += '<span class="d-block m-b-20">' + 
                                                '<span class="bold">' +
                                                    key + ' ' + month_name_header[ now_month  ] +
                                                '</span>' + 
                                                ' - ' + name_event + 
                                            '</span>';

                break;

            }
        }

        if ( count_events > 1 ) nearest_event.previousElementSibling.innerHTML = 'Ближайшие события:';

    } else {
        main_notifications.innerHTML = '<div class="text-center">' +
                                            '<h3>Ваше местоположение не определено</h3>' +  
                                            '<button id="select_city_notif" class="bold">' +
                                                'Выбор города'+
                                            '</button>' +  
                                       '</div>'

        let select_city_notif = document.getElementById( 'select_city_notif' );

        select_city_notif.onclick = function() {
            location.href = 'index.html'
        }
    }

    form.onsubmit = function( event ) {
        let error_update = document.getElementById( 'error_update' );

        if ( error_update ) error_update.remove();
        
        event.preventDefault();
        button_update_notif.setAttribute( 'disabled', 'true' );
        button_update_notif.after( min_preloader );
        min_preloader.children[0].style = 'width: 25px; height: 25px;';

        if ( info_notifications.status === form.status_notifications.dataset.status &&
             info_notifications.day === Number( form.get_notifications.value ) &&
             info_notifications.time === form.time.value ) {

                message_notifications.innerHTML = '<div class="width-fit m-auto">' +
                                                    '<span class="d-block text-center">' +
                                                        'Настройки уведомлений остались без изменений!' +
                                                    '</span>' +
                                                  '</div>';

                message_notifications.style.bottom = '0';

                setTimeout( () => {
                    message_notifications.style.cssText = '';
                }, 2000 );

                setTimeout( () => {
                    button_update_notif.removeAttribute( 'disabled' );
                    min_preloader.remove();
                }, 3500 );

                return;
                
        } else {

            update_notifications( localStorage.getItem( 'city_name_id' ) );

        }

    }

    form.status_notifications.onclick = function() { 

        if ( form.status_notifications.checked ) {

            if ( form.status_notifications.dataset.status === 'true' ) {
                day_notifications.style.opacity = '0';
                time_notifications.style.opacity = '0';
                hr_hide[ 0 ].style.opacity = '0';
                hr_hide[ 1 ].style.opacity = '0';
                status_notifications_div.children[ 0 ].innerHTML = 'Включить уведомления';
                form.status_notifications.dataset.status = false;
                status_notifications = false;

                setTimeout( () => {
                    day_notifications.style.display = 'none';
                    time_notifications.style.display = 'none';
                    hr_hide[ 0 ].style.display = 'none';
                    hr_hide[ 1 ].style.display = 'none';
                    form.status_notifications.checked = false;
                }, 600 );

            } else if ( form.status_notifications.dataset.status === 'false') {

                day_notifications.style.removeProperty( 'display' );
                time_notifications.style.removeProperty( 'display' );
                hr_hide[ 0 ].style.removeProperty( 'display' );
                hr_hide[ 1 ].style.removeProperty( 'display' );
                status_notifications_div.children[ 0 ].innerHTML = 'Отключить уведомления';
                form.status_notifications.dataset.status = true;
                status_notifications = true;

                setTimeout( () => {
                    day_notifications.style.removeProperty( 'opacity' );
                    time_notifications.style.removeProperty( 'opacity' );
                    hr_hide[ 0 ].style.removeProperty( 'opacity' );
                    hr_hide[ 1 ].style.removeProperty( 'opacity' );
                    form.status_notifications.checked = false;
                }, 600 );

            }

        }

    }

    nav.onclick = function() {

        if ( info_notifications.status === form.status_notifications.dataset.status &&
             info_notifications.day === Number( form.get_notifications.value ) &&
             info_notifications.time === form.time.value ) {
            ul_nav.style.cssText = 'opacity: 1; z-index: 7';
        } else {
            check_exit_page.style.cssText = 'opacity: 1; z-index: 7';

            ok_transition.onclick = function() {
                check_exit_page.style.cssText = '';
                ul_nav.style.cssText = 'opacity: 1; z-index: 7';
            }

            remain.onclick = function() {
                check_exit_page.style.cssText = '';
            }

        }

    }

    home.onclick = function( event ) {

        if ( info_notifications.status !== form.status_notifications.dataset.status ||
             info_notifications.day !== Number( form.get_notifications.value ) ||
             info_notifications.time !== form.time.value ) {
            event.preventDefault();
            check_exit_page.style.cssText = 'opacity: 1; z-index: 7';

            ok_transition.onclick = function() {
                check_exit_page.style.cssText = '';
                window.location.href = 'index.html';
            }

            remain.onclick = function() {
                check_exit_page.style.cssText = '';
            }

        }

    }

}

//work_settings_notifications();

document.addEventListener( "deviceready", work_settings_notifications, false );

