//Global var
var CRUMINA = {};

(function ($) {

	// USE STRICT
	"use strict";

	//----------------------------------------------------/
	// Predefined Variables
	//----------------------------------------------------/
	var $window = $(window),
		$document = $(document),
		$progress_bar = $('.crumina-skills-item'),
		$header = $('.site-header'),
		$footer= $('#site-footer'),
		$countdown_number = $('.crumina-countdown-number'),

		//Elements
		$preloader = $('#hellopreloader');


	/* -----------------------
	 * Preloader
	 * --------------------- */

	CRUMINA.preloader = function () {
		setTimeout(function () {
			$preloader.fadeOut(800);
		}, 500);
		return false;
	};

	/* -----------------------
 * COUNTDOWN
 * https://github.com/wimbarelds/TimeCircles
 * --------------------- */

	CRUMINA.countdowns = function () {

		$countdown_number.each(function () {
			$(this).TimeCircles({
				circle_bg_color: 'transparent',
				animation_interval: 'ticks',
				number_size: 0.28,
				text_size: 0.15,

				time: {
					Days: {color: 'transparent'},
					Hours: {color: 'transparent'},
					Minutes: {color: 'transparent'},
					Seconds: {color: 'transparent'}
				}
			});

		});
	};

	/* -----------------------
     * Progress bars Animation
     * --------------------- */

	CRUMINA.progresBars = function () {
		if ($progress_bar.length) {
			$progress_bar.each(function () {
				jQuery(this).waypoint(function () {
					$(this.element).find('.count-animate').countTo();
					$(this.element).find('.skills-item-meter-active').fadeTo(300, 1).addClass('skills-animate');
					this.destroy();
				}, {offset: '90%'});
			});
		}
	};

	/* -----------------------------
     * Select2 Initialization
     * https://select2.org/getting-started/basic-usage
     * ---------------------------*/

	CRUMINA.select2Init = function () {
		$('.crumina--select').select2();
	};

	/* -----------------------
	 * Main Navigation
	 * --------------------- */

	CRUMINA.navigation = function () {
		var navigation = new Navigation(document.getElementById("navigation"));
	};

	/* ==========================================

	Sticky Header

	========================================== */

	CRUMINA.fixedHeader = function () {
		var $stickyHeader = $('.header--sticky');

		$(document).on("scroll", function(){

			if ($(document).scrollTop() > 100){
				$stickyHeader.addClass("header--fixed");
			} else {
				$stickyHeader.removeClass("header--fixed");
			}

		});
	};


	/*!
 	* Chart.js Demo config options
 	*/

	CRUMINA.statsInit = function () {

		var lineChart = document.getElementById("line-chart");

		if (lineChart !== null) {
			var ctx_lc = lineChart.getContext("2d");
			var data_lc = {
				labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
				datasets: [
					{
						label: " - ms",
						borderColor: "#8ad524",
						borderWidth: 4,
						pointBorderColor: "#fff",
						pointBackgroundColor: "#8ad524",
						pointBorderWidth: 4,
						pointRadius: 6,
						pointHoverRadius: 8,
						fill: false,
						lineTension:0,
						data: [0,250,200,278,506,483,153,620,500,260,320,0]
					}]
			};

			var lineChartEl = new Chart(ctx_lc, {
				type: 'line',
				data: data_lc,
				options: {
					legend: {
						display: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							ticks: {
								fontColor: '#8d9cab'
							},
							gridLines: {
								color: "#cfd8df"
							}
						}],
						yAxes: [{
							gridLines: {
								color: "#cfd8df"
							},
							ticks: {
								beginAtZero:true,
								fontColor: '8d9cab'
							}
						}]
					}
				}
			});
		}

		var lineChartBg = document.getElementById("line-chart-bg");

		if (lineChartBg !== null) {
			var ctx_lcbg = lineChartBg.getContext("2d");
			var data_lcbg = {
				labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
				datasets: [
					{
						label: " - ms",
						borderColor: "#8ad524",
						backgroundColor: "rgba(138,213,36,0.4)",
						borderWidth: 4,
						pointBorderColor: "#fff",
						pointBackgroundColor: "#8ad524",
						pointBorderWidth: 4,
						pointRadius: 6,
						pointHoverRadius: 8,
						data: [0,200,160,400,500,200,310,605,803,500,200,0]
					}]
			};

			var lineChartEl = new Chart(ctx_lcbg, {
				type: 'line',
				data: data_lcbg,
				options: {
					legend: {
						display: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							ticks: {
								fontColor: '#8d9cab'
							},
							gridLines: {
								color: "#cfd8df"
							}
						}],
						yAxes: [{
							gridLines: {
								color: "#cfd8df"
							},
							ticks: {
								beginAtZero:true,
								fontColor: '8d9cab'
							}
						}]
					}
				}
			});
		}

		var lineChartBg = document.getElementById("line-chart-linear");

		if (lineChartBg !== null) {
			var ctx_lcl = lineChartBg.getContext("2d");
			var data_lcl = {
				labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
				datasets: [
					{
						label: " - ms",
						borderColor: "#8ad524",
						borderWidth: 4,
						pointBorderColor: "#fff",
						pointBackgroundColor: "#8ad524",
						pointBorderWidth: 4,
						pointRadius: 6,
						pointHoverRadius: 8,
						fill: false,
						data: [0,5,3,8,1,10,5,3,7,2,9,0]
					}]
			};

			var lineChartEl = new Chart(ctx_lcl, {
				type: 'line',
				data: data_lcl,
				options: {
					legend: {
						display: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							ticks: {
								fontColor: '#8d9cab'
							},
							gridLines: {
								color: "#cfd8df"
							}
						}],
						yAxes: [{
							gridLines: {
								color: "#cfd8df"
							},
							ticks: {
								beginAtZero:true,
								fontColor: '8d9cab'
							}
						}]
					}
				}
			});
		}

	};

	//Scroll to top.
	jQuery('.back-to-top').on('click', function () {
		$('html,body').animate({
			scrollTop: 0
		}, 1200);
		return false;
	});

	/* -----------------------------
     * Material design js effects
     * Script file: material.min.js
     * Documentation about used plugin:
     * http://demos.creative-tim.com/material-kit/components-documentation.html
     * ---------------------------*/

	CRUMINA.Materialize = function () {
		$.material.init();

		$('.checkbox > label').on('click', function () {
			$(this).closest('.checkbox').addClass('clicked');
		});

		var $picker = $('.datepicker');
		$picker.each(function () {
			var $self = jQuery(this);

			$self.datepicker().on('changeDate', function (ev) {
				$self.datepicker('hide');
			});

		});

	};


	/* -----------------------------
* Sliders and Carousels
* ---------------------------*/

	CRUMINA.Swiper = {
		$swipers: { },
		init: function () {
			var _this = this;
			$( '.swiper-container' ).each( function ( idx ) {
				var $self = $( this );
				var id = 'swiper-unique-id-' + idx;
				$self.addClass( id + ' initialized' ).attr( 'id', id );
				$self.closest( '.crumina-module' ).find( '.swiper-pagination' ).addClass( 'pagination-' + id );

				_this.$swipers[id] = new Swiper( '#' + id, _this.getParams( $self, id ) );
				_this.addEventListeners( _this.$swipers[id] );
			} );
		},
		getParams: function ( $swiper, id ) {
			var params = {
				parallax: true,
				breakpoints: false,
				keyboardControl: true,
				setWrapperSize: true,
				preloadImages: true,
				updateOnImagesReady: true,
				prevNext: ( $swiper.data( 'prev-next' ) ) ? $swiper.data( 'prev-next' ) : false,
				changeHandler: ( $swiper.data( 'change-handler' ) ) ? $swiper.data( 'change-handler' ) : '',
				direction: ( $swiper.data( 'direction' ) ) ? $swiper.data( 'direction' ) : 'horizontal',
				mousewheelControl: ( $swiper.data( 'mouse-scroll' ) ) ? $swiper.data( 'mouse-scroll' ) : false,
				mousewheelReleaseOnEdges: ( $swiper.data( 'mouse-scroll' ) ) ? $swiper.data( 'mouse-scroll' ) : false,
				slidesPerView: ( $swiper.data( 'show-items' ) ) ? $swiper.data( 'show-items' ) : 1,
				slidesPerGroup: ( $swiper.data( 'scroll-items' ) ) ? $swiper.data( 'scroll-items' ) : 1,
				spaceBetween: ( $swiper.data( 'space-between' ) || $swiper.data( 'space-between' ) == 0 ) ? $swiper.data( 'space-between' ) : 20,
				centeredSlides: ( $swiper.data( 'centered-slider' ) ) ? $swiper.data( 'centered-slider' ) : false,
				autoplay: ( $swiper.data( 'autoplay' ) ) ? parseInt( $swiper.data( 'autoplay' ), 10 ) : 0,
				autoHeight: ( $swiper.hasClass( 'auto-height' ) ) ? true : false,
				loop: ( $swiper.data( 'loop' ) == false ) ? $swiper.data( 'loop' ) : true,
				effect: ( $swiper.data( 'effect' ) ) ? $swiper.data( 'effect' ) : 'slide',
				pagination: {
					type: ( $swiper.data( 'pagination' ) ) ? $swiper.data( 'pagination' ) : 'bullets',
					el: '.pagination-' + id,
					clickable: true
				},
				coverflow: {
					stretch: ( $swiper.data( 'stretch' ) ) ? $swiper.data( 'stretch' ) : 0,
					depth: ( $swiper.data( 'depth' ) ) ? $swiper.data( 'depth' ) : 0,
					slideShadows: false,
					rotate: 0,
					modifier: 2,
				},
				fade: {
					crossFade: ( $swiper.data( 'crossfade' ) ) ? $swiper.data( 'crossfade' ) : true
				},
			}

			if ( params['slidesPerView'] > 1 ) {
				params['breakpoints'] = {
					768: {
						slidesPerView: 1,
						slidesPerGroup: 1
					},
					1024: {
						slidesPerView: 2,
						slidesPerGroup: 2
					}
				};
			}

			return params;
		},
		addEventListeners: function ( $swiper ) {
			var _this = this;
			var $wrapper = $swiper.$el.closest( '.crumina-module-slider' );

			//Prev Next clicks
			if ( $swiper.params.prevNext ) {
				$wrapper.on( 'click', '.swiper-btn-next, .swiper-btn-prev', function ( event ) {
					event.preventDefault();
					var $self = $( this );

					if ( $self.hasClass( 'swiper-btn-next' ) ) {
						$swiper.slideNext();
					} else {
						$swiper.slidePrev();
					}
				} );
			}

			//Thumb/times clicks
			$wrapper.on( 'click', '.slider-slides .slides-item', function ( event ) {
				event.preventDefault();
				var $self = $( this );
				if ( $swiper.params.loop ) {
					$swiper.slideToLoop( $self.index() );
				} else {
					$swiper.slideTo( $self.index() );
				}
			} );

			//Run handler after change slide
			$swiper.on( 'slideChange', function () {
				var handler = _this.changes[$swiper.params.changeHandler];
				if ( typeof handler === 'function' ) {
					handler( $swiper, $wrapper, _this, this.realIndex );
				}
			} );
		},
		changes: {
			'thumbsParent': function ( $swiper, $wrapper ) {
				var $thumbs = $wrapper.find( '.slider-slides .slides-item' );
				$thumbs.removeClass( 'swiper-slide-active' );
				$thumbs.eq( $swiper.realIndex ).addClass( 'swiper-slide-active' );
			}
		}
	};


	/* -----------------------------
	* Focus for input (Search Popup)
	* ---------------------------*/

	jQuery('.navigation-search').on('click', function () {
		jQuery('.search-popup-form').find('input').focus();
	});


	/* -----------------------------
	* Bootstrap components init
	* ---------------------------*/

	CRUMINA.Bootstrap = function () {
		//  Activate the Tooltips
		$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

		$('.collapse').collapse();
	};

	/*---------------------------------
		ACCORDION
	-----------------------------------*/

	$('.crumina-accordion button').on('click', function () {

		var $acordionOpen = $(this).closest(".card").find(".collapse").hasClass("show");

		$(this).closest(".crumina-accordion").find(".card").removeClass("active");

		if ($acordionOpen) {
			$(this).parents(".card").removeClass("active");
		} else {
			$(this).parents(".card").toggleClass("active");
		}
	});


	/* -----------------------------
	* Pricing Switcher
	* ---------------------------*/

	CRUMINA.pricingSwitcher = function () {
		$('.tgl').find('.input-checkbox').prop("checked", false);

		$('.js-pricing-switcher').on('click', function () {
			var $is_year = $(this).prev().is(':checked');
			var $section = $(this).closest('.crumina-pricings');
			var $price = $section.find('.price');
			$price.each(function () {
				if ($is_year) {
					$(this).text($(this).data('monthly'));
				} else {
					$(this).text($(this).data('annually'));
				}
			});
		});
	};

	/* -----------------------
  * Create the map
  * https://leafletjs.com/
  * --------------------- */

	CRUMINA.maps = {
		maps: {
			mapUSA: {
				config: {
					id: 'map35',
					map: {
						center: new L.LatLng(38.897663, -77.036575),
						zoom: 12,
						maxZoom: 18,
						layers: new L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
							maxZoom: 18,
							attribution: '',
						})
					},
					icon: {
						iconSize: [40, 51],
						iconAnchor: [22, 94],
						className: 'icon-map'
					}
				},
				markers: [
					{
						coords: [38.897663, -77.036575],
						icon: 'marker-google.png'
					}
				]
			},
			mapAustralia: {
				config: {
					id: 'map11',
					map: {
						center: new L.LatLng(-37.613611, 144.963056),
						zoom: 12,
						maxZoom: 18,
						layers: new L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
							maxZoom: 18,
							attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
						})
					},
					icon: {
						iconSize: [40, 51],
						iconAnchor: [22, 94],
						className: 'icon-map'
					},
					cluster: {
						iconSize: [40, 40]
					}
				},

				markers: [
					{
						coords: [-37.613611, 144.963056],
						icon: 'marker-google.png'
					}
				]

			},
			mapGermany: {
				config: {
					id: 'map21',
					map: {
						center: new L.LatLng(26.5082, 31.3713),
						zoom: 12,
						maxZoom: 18,
						layers: new L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
							maxZoom: 18,
							attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
						})
					},
					icon: {
						iconSize: [40, 51],
						iconAnchor: [22, 94],
						className: 'icon-map'
					},
					cluster: {
						iconSize: [40, 40]
					}
				},
				markers: [
					{
						coords: [52.518589, 13.375520],
						icon: 'marker-google.png'
					}
				]

			},
			mapSwitzerland: {
				config : {
					id     : 'map31',
					map    : {
						center : new L.LatLng(47.364970, 8.524340),
						zoom   : 12,
						maxZoom: 18,
						layers : new L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
							maxZoom    : 18,
							attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
						})
					},
					icon   : {
						iconSize  : [40, 51],
						iconAnchor: [22, 94],
						className : 'icon-map'
					},
					cluster: {
						iconSize: [40, 40]
					}
				},
				markers: [
					{
						coords: [47.364970, 8.524340],
						icon  : 'marker-google.png'
					}
				]

			},
			mapUkraine: {
				config : {
					id     : 'map41',
					map    : {
						center : new L.LatLng(50.447281, 30.536872),
						zoom   : 12,
						maxZoom: 18,
						layers : new L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
							maxZoom    : 18,
							attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
						})
					},
					icon   : {
						iconSize  : [40, 51],
						iconAnchor: [22, 94],
						className : 'icon-map'
					},
					cluster: {
						iconSize: [40, 40]
					}
				},
				markers: [
					{
						coords: [50.447281, 30.536872],
						icon  : 'marker-google.png'
					}
				]

			},
		},
		init: function () {
			var _this = this;

			for (var key in this.maps) {
				var data = this.maps[key];

				if (!data.config || !data.markers) {
					continue;
				}

				if (!document.getElementById(data.config.id)) {
					continue;
				}

				var map = new L.map(data.config.id, data.config.map);
				var cluster = L.markerClusterGroup({
					iconCreateFunction: function (cluster) {
						var childCount = cluster.getChildCount();
						var config = data.config.cluster;
						return new L.DivIcon({
							html: '<div><span>' + childCount + '</span></div>',
							className: 'marker-cluster marker-cluster-' + key,
							iconSize: new L.Point(config.iconSize[0], config.iconSize[1])
						});
					}
				});
				data.markers.forEach(function (item) {
					data.config.icon['iconUrl'] = './img/demo-content/icons/' + item.icon;
					var icon = L.icon(data.config.icon);

					var marker = L.marker(item.coords, {icon: icon});
					cluster.addLayer(marker);
				});

				map.addLayer(cluster);
				this.disableScroll(jQuery("#" + data.config.id), map);
			}
		},
		disableScroll: function ($map, map) {
			map.scrollWheelZoom.disable();

			$map.bind('mousewheel DOMMouseScroll', function (event) {
				event.stopPropagation();
				if (event.ctrlKey == true) {
					event.preventDefault();
					map.scrollWheelZoom.enable();
					setTimeout(function () {
						map.scrollWheelZoom.disable();
					}, 1000);
				} else {
					map.scrollWheelZoom.disable();
				}
			});
		}
	};

	/* -----------------------------
     * Embedded Video in pop up
     * http://dimsemenov.com/plugins/magnific-popup/
     * ---------------------------*/
	CRUMINA.mediaPopups = function () {
		$('.js-popup-iframe').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
		$('.js-zoom-image, .link-image').magnificPopup({
			type: 'image',
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
				beforeOpen: function () {
					// just a hack that adds mfp-anim class to markup
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = 'mfp-zoom-in';
				}
			},
			closeOnContentClick: true,
			midClick: true
		});
	};

	/* -----------------------
     * SmoothScroll
     * http://github.com/cferdinandi/smooth-scroll
     * --------------------- */

	CRUMINA.initSmoothScroll = function () {
		var scroll = new SmoothScroll('a[href*="#"]', {

			speed: 6000, // Integer. How fast to complete the scroll in milliseconds
			offset: $header.height(),
			// Function. Custom easing pattern
			// If this is set to anything other than null, will override the easing option above
			easing: 'easeInOutCubic', // Easing pattern to use
			speedAsDuration: true, // If true, use speed as the total duration of the scroll animation
			durationMax: 1000 // Integer. The maximum amount of time the scroll animation should take
		});
	};

	/* -----------------------------
	 * Isotope sorting
	 * https://isotope.metafizzy.co
	 * ---------------------------*/

	CRUMINA.IsotopeSort = function () {
		var $container = $('.sorting-container');
		$container.each(function () {
			var $current = $(this);
			var layout = ($current.data('layout').length) ? $current.data('layout') : 'masonry';
			$current.isotope({
				itemSelector: '.sorting-item',
				layoutMode: layout,
				percentPosition: true
			});

			$current.imagesLoaded().progress(function () {
				$current.isotope('layout');
			});

			var $sorting_buttons = $current.closest('.sorting-section-js').find('.sorting-menu').find('.category-list-item');

			$sorting_buttons.on('click', function () {
				if ($(this).hasClass('active')) return false;
				$(this).parent().find('.active').removeClass('active');
				$(this).addClass('active');
				var filterValue = $(this).data('filter');
				if (typeof filterValue != "undefined") {
					$current.isotope({filter: filterValue});
					return false;
				}
			});
		});
	};

	/* -----------------------
     * Parallax footer
     * --------------------- */

	CRUMINA.parallaxFooter = function () {
		if ($footer.length && $footer.hasClass('js-fixed-footer')) {
			$footer.before('<div class="block-footer-height"></div>');
			$('.block-footer-height').matchHeight({
				target: $footer
			});
		}
	};

	/* -----------------------------
		 * Toggle search overlay
	* ---------------------------*/
	CRUMINA.toggleFocusSearch = function () {
		$('.modal').on('shown.bs.modal', function() {
			$(this).find('.search-popup-form input').focus();
		});
	};

	CRUMINA.activateTabContent = function () {
		$('#map-tabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			window.dispatchEvent(new Event('resize'));
		});

		$('#tabs-with-slider a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			var paneTarget = $(e.target).attr('href');
			var $thePane = $('.tab-pane' + paneTarget);
			if ($thePane.find('.swiper-container').length > 0 && 0 === $thePane.find('.swiper-slide-active').length) {
				document.querySelectorAll('.tab-pane' + paneTarget + ' .swiper-container').forEach(function (item) {
					item.swiper.update();
					item.swiper.lazy.load();
				});
			}
		});
	};


	$document.ready(function () {
		CRUMINA.preloader();
		CRUMINA.navigation();
		CRUMINA.select2Init();
		CRUMINA.Materialize();
		CRUMINA.Swiper.init();
		CRUMINA.Bootstrap();
		CRUMINA.pricingSwitcher();
		CRUMINA.progresBars();
		CRUMINA.maps.init();
		CRUMINA.mediaPopups();
		CRUMINA.countdowns();
		CRUMINA.initSmoothScroll();
		CRUMINA.IsotopeSort();
		CRUMINA.fixedHeader();
		CRUMINA.parallaxFooter();
		CRUMINA.statsInit();
		CRUMINA.toggleFocusSearch();
		CRUMINA.activateTabContent();

		$('.mCustomScrollbar').perfectScrollbar({wheelPropagation: false});
		$('.perfect-scroll').perfectScrollbar({wheelPropagation: false});
	});

})(jQuery);
