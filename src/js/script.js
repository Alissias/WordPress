import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'animate.css';

const burger = document.querySelector(".burger"),
	close = document.querySelector(".menu__close"),
	menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
	menu.classList.add("menu_active");
	document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
	menu.classList.remove("menu_active");
	document.body.style.overflow = "";
});

// try {
//   new Swiper('.works__slider', {
//   slidesPerView: 1,
//   loop: true,
//   pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//   },
//   navigation: {
//       nextEl: ".icon-right-open",
//       prevEl: ".icon-left-open",
//   },
//   breakpoints: {
//     // when window width is >= 1200px
//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 5,
//     },
//     1920: {
//       slidesPerView: 3,
//       spaceBetween: 35,
//     },
//   },
//   modules: [Navigation, Pagination], 
// });
// } catch(e) {}



// try {
// 	const tabs = document.querySelectorAll(".catalog__tab");
// 	const contents = document.querySelectorAll(".catalog__content-item");

// 	tabs.forEach((tab, index) => {
// 		tab.addEventListener("click", () => {
// 			// Удаляем активный класс у всех табов и контента
// 			tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
// 			contents.forEach((c) => (c.style.display = "none"));

// 			// Добавляем активный класс к нажатому табу и показываем соответствующий контент
// 			tab.classList.add("catalog__tab_active");
// 			contents[index].style.display = "flex";
// 		});
// 	});

// 	// Показываем первый контент при загрузке
// 	contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
// } catch (e) {}



// try {
//   const validator = new JustValidate('form');

//   validator
//     .addField('#name', [
//       {
//         rule: 'required',
//         errorMessage: 'Please fill the name',
//       },
//       {
//         rule: 'minLength',
//         value: 2,
//         errorMessage: 'Min 2 char!'
//       },
//     ])
//     .addField('#email', [
//       {
//         rule: 'required',
//       },
//       {
//         rule: 'email',
//       },
//     ])
//     .addField('#question', [
//       {
//         rule: 'required',
//       },
//       {
//         rule: 'minLength',
//         value: 5,
//       },
//     ], {
//       errorsContainer: document
//         .querySelector('#question')
//         .parentElement.querySelector('.error-message'),
//     })
//     .addField('#checkbox', [
//       {
//         rule: 'required',
//       },
//     ], {
//       errorsContainer: document
//         .querySelector('#checkbox')
//         .parentElement.parentElement.querySelector('.checkbox-error-message'),
//     })
//     .onSuccess(( event ) => {
//       const form = event.currentTarget;
//       const formData = new FormData(form);

//       fetch('https://httpbin.org/post', {
//         method: "POST",
//         body: formData,
//       })
// 	  .then(res => res.json())
// 	  .then(data => {
//         console.log('Success', data);
// 		form.reset() ;
//       })
//     });
// } catch (e) {}

// try {
// 	const validatorFooter = new JustValidate(".footer__form");

// 	validatorFooter
// 		.addField(
// 			"#footer__email",
// 			[
// 				{
// 					rule: "required",
// 				},
// 				{
// 					rule: "email",
// 				},
// 			],
// 			{
// 				errorsContainer: document
// 					.querySelector("#footer__email")
// 					.parentElement.querySelector(".email-error-message"),
// 			}
// 		)
// 		.addField(
// 			"#footer__checkbox",
// 			[
// 				{
// 					rule: "required",
// 				},
// 			],
// 			{
// 				errorsContainer: document
// 					.querySelector("#footer__checkbox")
// 					.parentElement.parentElement.querySelector(".check-error-message"),
// 			}
// 		);
// } catch (e) {}



try {
	const counters = document.querySelectorAll('.skills__rating_counter'),
		  lines = document.querySelectorAll ('.skills__rating_line span');

	counters.forEach( (item, i) => {
		lines[i].style.width = item.innerHTML;
	})
} catch (e) {}



import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";

import "/src/sass/style.scss";
import { compileString } from 'sass';