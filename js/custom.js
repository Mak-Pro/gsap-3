
document.addEventListener('DOMContentLoaded', function(){

	
	// Нужно обязательно регистрировать, так же и для React
	gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, CustomBounce, CustomEase, CustomWiggle);


	document.querySelectorAll('.hall').forEach((section) => {

		let img = section.querySelector('img');


		// BASE ANIMATION

		// gsap.to(img, {opacity: 0, yPercent: 30, scrollTrigger: {
		// 	trigger: section,
		// 	start: 'top top', // первый - начальная позиция в секции, второй - начальная позийия скроллера
		// 	end: 'bottom center',
		// 	scrub: true,
		// 	markers: {startColor: "green", endColor: "tomato", fontSize: "12px"}
		// }});


		// TOGGLE ACTIVE CLASS

		// gsap.set(section, {scrollTrigger: {
		// 	trigger: section,
		// 	start: 'top bottom-=30%', // первый - начальная позиция в секции, второй - начальная позийия скроллера
		// 	end: 'bottom top+=30%',
		// 	toggleClass: 'active',
		// 	markers: {startColor: "green", endColor: "tomato", fontSize: "12px"}
		// }});

	});






	// Parallax

		document.querySelectorAll('.parallax').forEach((section) => {

			let bg = section.querySelector('.parallax__bg'),
					title = section.querySelector('.title'),
					text = section.querySelector('p');

			const parallax = gsap.timeline({
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: `top bottom`,
					end: `bottom top-=${section.offsetHeight}`,
					scrub: true,
					// markers: true,
				}
			})
			.from(bg, {y: '-50%', duration: 1})
			.from([title, text], {opacity: 0, duration: 0.2, delay: 0.15}, 0)
			.to([title, text], {opacity: 0, duration: 0.2, delay: 0.5}, 0);

		});






		// PIN

		document.querySelectorAll('.pinning').forEach((section) => {

			const content = section.querySelector('.pinning__inner');

			const pin = gsap.timeline({
				ease: 'none',
				scrollTrigger: {
					trigger: content,
					start: 'top top+=10%',
					pin: true,
					scrub: true,
					// markers: true,
				}
			})
			.to([section.querySelector('.title'), section.querySelector('p')], {autoAlpha: 0, ease: 'none'}); 

		});
	














	if(document.querySelector('.halloween') !== null) {

		const play = document.querySelector('.play');
		const pause = document.querySelector('.pause');
		const reverse = document.querySelector('.reverse');
		const restart = document.querySelector('.restart');


	 	
	 	const halloween = gsap.timeline({
	 		paused: true,
	 	})
	 	.from('.spooky', {yPercent: -100, opacity: 0, duration: 0.75, ease: 'back(4)'})
	 	// .from('.spooky', {yPercent: -100, duration: 0.75, ease: 'power2.inOut', repeat: -1, yoyo: true,})
	 	.from('.pumpkins img', {opacity: 0, y: 50, stagger: 0.1, ease: 'back(4)'}, '-=0.5');



	 	// controls
	 	play.addEventListener('click', () => {
	 		halloween.play();
	 	});

	 	pause.addEventListener('click', () => {
	 		halloween.pause();
	 	});

	 	reverse.addEventListener('click', () => {
	 		halloween.reverse();
	 	});

	 	restart.addEventListener('click', () => {
	 		halloween.restart();
	 	});

	}



	if(document.querySelector('.halloween__draw') !== null) {
		const drawTl = gsap.timeline();

		document.querySelector('.draw__h').addEventListener('click', () => {
			drawTl.fromTo('.halloween__draw circle', {drawSVG:"0%"}, {duration: 1, drawSVG:"100%"});
		});

		
	}



		if(document.querySelector('#featureBackground') !== null) {
			let dots = [],
			bg = document.querySelector("#featureBackground"),
			i, dot;

			// create 80 dot elements and put them in an array
			for (i = 0; i < 80; i++) {
				dot = document.createElement("div");
				dot.setAttribute("class", "dot");
				bg.appendChild(dot);
				dots.push(dot);
			}

			//set the initial position of all the dots, and pick a random color for each from an array of colors
			gsap.set(dots, {
				backgroundColor: "random([#663399,#84d100,#cc9900,#0066cc,#993333])",
			  scale: "random(0.4, 1)",
				x:400,
				y:300
			});
		}

		

		// create the physics2D animation
		if(document.querySelector('.runfisics') !== null) {
			document.querySelector('.runfisics').addEventListener('click', () => {
				gsap.to(dots, {
					duration: 2.5,
					physics2D: {
						velocity: "random(200, 650)",
						angle: "random(250, 290)",
						gravity: 500
					},
					delay: "random(0, 2.5)"
				});
			});
		};
		

		


		/* ---------- scrumble text ---------- */


		if(document.querySelector('.runscrumb') !== null) {
			var scrumbtl = gsap.timeline({defaults: {duration: 2, ease: "none"}});

			document.querySelector('.runscrumb').addEventListener('click', () => {
				scrumbtl.to("#scramble", {duration: 3, scrambleText:{text:"ScrambleText allows you to animate the scrambling of text.", chars:"lowerCase", revealDelay:0.5, tweenLength:false}})
				.to("#charsCustom", {duration: 4, scrambleText:{text:"Specify a set of characters to scramble like 'XO'", chars:"XO", revealDelay:1, tweenLength:false, speed:0.4}})
				.to("#charsNumbers", {duration: 4, scrambleText:{text:"or use only numbers,", chars:"0123456789"}})
				.to("#charsUppercase", {scrambleText:{text:"UPPERCASE", chars:"upperCase",  speed:0.3}})
				.to("#charsLowercase", {scrambleText:{text:"or lowercase.", chars:"lowerCase", speed:0.3}})
				.to("#newClass", {scrambleText:{text:"Even apply a custom class to the text.", chars:"lowerCase", speed:0.3, newClass:"orange", revealDelay:0.5, tweenLength:false}});
			});
		}

		






		/* ---------- custom bounce ---------- */

		if(document.querySelector('#custom__bounce') !== null) {
			function customBounce() {
				var duration = 3;
				var tl = gsap.timeline({delay: 0.2});

			//strength between 0 and 1
			CustomBounce.create("myBounce", {strength: 0.7, squash: 3});
				tl
				.to("#ball", {duration: duration, y: 550, ease: "myBounce"})
				.to("#ball", {duration: duration, scaleY: 0.5, scaleX: 1.3, ease: "myBounce-squash", transformOrigin: "bottom"}, 0)

				//graph the lines...
				//bounce ease green
				CustomEase.getSVGData("myBounce", {path:"#bounce", width:700, height:500});
				//squash ease red
				CustomEase.getSVGData("myBounce-squash", {path:"#squash", width:700, height:500});
			}

			document.querySelector('#custom__bounce .run').addEventListener('click', function() {
				customBounce();
			});
		}

		






		/* ---------- custom wiggle ---------- */


		if(document.querySelector('#custom__wiggle') !== null) {
				function customWiggle() {

				var wiggles = 10; //tweak this to whatever number you want. 

				//create the custom eases..
				CustomWiggle.create("Wiggle.easeOut", {wiggles:wiggles, type:"easeOut"});
				CustomWiggle.create("Wiggle.easeInOut", {wiggles:wiggles, type:"easeInOut"});
				CustomWiggle.create("Wiggle.anticipate", {wiggles:wiggles, type:"anticipate"});
				CustomWiggle.create("Wiggle.uniform", {wiggles:wiggles, type:"uniform"});
				CustomWiggle.create("Wiggle.random", {wiggles:wiggles, type:"random"});


				//now set up a master timeline that repeats 50 times...
				var tl = gsap.timeline({repeat:50, repeatDelay:1, delay:1});
				tl.add(wiggle("easeOut", 2))
				  .add(wiggle("easeInOut", 2), "+=0.5")
				  .add(wiggle("anticipate", 3), "+=0.5")
				  .add(wiggle("uniform", 2), "+=0.5")
				  .add(wiggle("random", 6), "+=0.5");


				//for convenience, let the user click any of the boxes to trigger animation (which should pause the main timeline)
				setupClick("easeOut", 2);
				setupClick("easeInOut", 2);
				setupClick("anticipate", 3);
				setupClick("uniform", 2);
				setupClick("random", 6);

				//just a helper function for wiggling the box and ball for a particular ID, like "easeOut"
				function wiggle(id, duration) {
				  var tl = gsap.timeline();
				  tl.to("#" + id, {duration:duration, rotation:30, ease:"Wiggle." + id})
				    .to("#" + id + "Ball", {duration:duration, x:100, ease:"Wiggle." + id}, 0);
				  return tl;
				}

				//a helper function for setting up the click behavior for each box according to ID 
				function setupClick(id, duration) {
				  var animation = wiggle(id, duration).pause();
				  	document.querySelector("#" + id).addEventListener("click", function() {
							tl.pause(0);
							animation.play(0);
						});
				}

				//NOTE: if you want to start in the opposite direction, just set invert:true in the CustomWiggle.create() vars. 

				//graph them
				CustomEase.getSVGData("Wiggle.easeOut", {width:248, height:73, x:1, y:2, path:"#easeOutSVG"});
				CustomEase.getSVGData("Wiggle.easeInOut", {width:248, height:73, x:1, y:2, path:"#easeInOutSVG"});
				CustomEase.getSVGData("Wiggle.anticipate", {width:248, height:73, x:1, y:2, path:"#anticipateSVG"});
				CustomEase.getSVGData("Wiggle.uniform", {width:248, height:73, x:1, y:2, path:"#uniformSVG"});
				CustomEase.getSVGData("Wiggle.random", {width:248, height:73, x:1, y:2, path:"#randomSVG"});

			}


			customWiggle();
		}

		









		/* ---------- Morph svg ---------- */

		if(document.querySelector('#hippo') !== null) {
			function morphSvg() {
					var tl = gsap.timeline({defaults: {duration: 1}}),
					circle = document.getElementById("circle");
					tl.to(circle, {morphSVG:"#hippo"}, "+=1")
					.to(circle, {morphSVG:"#star"}, "+=1")
					.to(circle, {morphSVG:"#elephant"}, "+=1")
					.to(circle, {morphSVG:circle}, "+=1");
				}

				document.querySelector('.morph__btn').addEventListener('click', () => {
					morphSvg();
				});
		}

		







		/* ---------- inertia and draggable ---------- */

		if(document.querySelector('#knob') !== null) {

			function inerta() {
				const draggable = Draggable.create("#knob", {
					type: "rotation",
					inertia: true,
					onDrag: function() {
						console.log(this.rotation)
					}
				});
			}

			inerta();

		}

		



		if(document.querySelector('#quote') !== null) {

				function splitTextAnimation() {

				var $quote = document.querySelector("#quote"),
		    mySplitText = new SplitText($quote, {type:"words"}),
		    splitTextTimeline = gsap.timeline();

				gsap.set($quote, {perspective:400});

				//kill any animations and set text back to its pre-split state
				function kill(){
				  splitTextTimeline.clear().time(0);
				  mySplitText.revert();
				}

				document.querySelector("#chars").addEventListener('click', function() {
				  kill();
				  mySplitText.split({type:"chars, words"}) 
				  splitTextTimeline.from(mySplitText.chars, {duration: 0.6, scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:"back", stagger: 0.02});
				})

				document.querySelector("#words").addEventListener('click', function() {
				  kill();
				  mySplitText.split({type:"words"});
				  mySplitText.words.forEach((el, index) => {
				  	splitTextTimeline.from(el, {duration: 0.6, opacity:0, force3D:true}, index * 0.01);
				    splitTextTimeline.from(el, {duration: 0.6, scale:index % 2 == 0  ? 0 : 2}, index * 0.01); 
				  });
				})

				document.querySelector("#lines").addEventListener('click', function() {
				   kill();
				   mySplitText.split({type:"lines"}) 
				   splitTextTimeline.from(mySplitText.lines, {duration: 0.5, opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -150", stagger: 0.1});
				 
				})

				document.querySelector("#charsWordsLines").addEventListener('click', function() {
				  kill();
				  mySplitText.split({type:"chars, words, lines"}) 
				  splitTextTimeline.from(mySplitText.chars, {duration: 0.2, autoAlpha:0, scale:4, force3D:true, stagger: 0.01}, 0.5)
				    .to(mySplitText.words, {duration: 0.1, color:"#8FE402", scale:0.9, stagger: 0.1}, "words")
				    .to(mySplitText.words, {duration: 0.2, color:"white", scale:1, stagger: 0.1}, "words+=0.1")
				    .to(mySplitText.lines, {duration: 0.5, x:100, autoAlpha:0, stagger: 0.2}) 
				})

				//revert the text back to its pre-split state
				document.querySelector("#revert").click(function() {
				  mySplitText.revert(); 
				})

			}

			splitTextAnimation();

		}

		










		/* ---------- motion path helper ---------- */

		if(document.querySelector('.astronaut') !== null) {

			function motionPathHelper() {

				gsap.registerPlugin(MotionPathPlugin);

				gsap.set(".astronaut", {scale: 0.5, autoAlpha: 1});

				const run = gsap.to(".astronaut", {
					duration: 5, 
					ease: "power1.inOut",
					immediateRender: true,
					motionPath: {
						path: "#path",
						align: "#path",
						alignOrigin: [0.5, 0.5],
						autoRotate: 90
					}
				});

				MotionPathHelper.create(".astronaut");

				GSDevTools.create({
					container: '#motion__path_helper',
					animation: run
				});

			}


			motionPathHelper();

		}

		




		// SCROLLTRIGGER



		/* ---------- base animation ---------- */

		gsap.to('.pumpkin__limegreen', 2, {
			x: '25vw', 
			rotation: '360', 
			ease: 'linear', 
			scrollTrigger: {
				trigger: '.pumpkin__limegreen',
				// markers: true,
				start: 'top 75%',
				end: 'bottom 25%',
				// events: onEnter onLeave onEnterBack onLeaveBack
				toggleActions: 'restart pause reverse reset',
				// options: play, pause, resume, reset, restart, complete, reverse, none
			}
		});



		/* ---------- scrub and pin (animate by scroll) ---------- */

		const spTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.scroll__trigger_scrub_pin',
				start: 'top 50%',
				end: 'bottom 50%',
				// markers: true,
				scrub: 1, // включает контроль анимации по скроллу (число добавляет плавности, можно просто указать true)
				pin: true, // фиксирует анимируемый объект при скролле
			}
		});


		spTl
				.to('.pumpkin__yellow', {duration: 2, x: '25vw', rotation: '360', ease: 'easeOut'});


		// Sidebar example

		let sideHeight = document.querySelector('.scroll__trigger_sidebar').offsetHeight - document.querySelector('.scroll__trigger_sidebar .sidebar').offsetHeight;

		ScrollTrigger.create({
			trigger: '.scroll__trigger_sidebar .sidebar',
			start: 'top top',
			end: `${sideHeight} top`,
			// markers: true,
			pin: true
		});



		/* ---------- scroll video ---------- */


		window.onload = function() {
			const scrollVideo = document.querySelector('.scroll__video video');

			let videoTotalTime = scrollVideo.duration, 
					totalFrames = (videoTotalTime * 25) * 30;

					console.log(totalFrames);

			let videoTl = gsap.timeline({
				defaults: { duration: 1 },
				scrollTrigger: {
					trigger: ".scroll__video_inner",
					start: "top top",
					end: `${totalFrames} bottom`,
					pin: true,
					markers: true,
					scrub: 1
				}
			});

			videoTl.fromTo(scrollVideo, { currentTime: 0 }, { currentTime: scrollVideo.duration || 1 });

			// let videoTotalTime = scrollVideo.duration, 
			// 		totalFrames = (videoTotalTime * 25) * 100;

			// let videoDuration = 0;


			// ScrollTrigger.create({
			// 	trigger: '.scroll__video_inner',
			// 	start: 'top top',
			// 	end: `${totalFrames} bottom`,
			// 	markers: true,
			// 	scrub: 1,
			// 	pin: true,
			// 	onUpdate: function(e) {
			// 		videoDuration = e.progress * videoTotalTime;
			// 		// scrollVideo.currentTime = Number(videoDuration.toFixed(2));
			// 	}
			// });


			// setInterval(() => {
			// 	scrollVideo.currentTime = Number(videoDuration.toFixed(2));
			// }, 33.3);

		}

		

		












	
  
});


	