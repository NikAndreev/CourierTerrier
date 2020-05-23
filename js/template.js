$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 800, 'linear');
});

/* ПЛАВНЫЙ СКРОЛЛ */


window.onload = function() {
	let lang = document.querySelector('.lang');
		options = document.querySelectorAll('.lang__option');

		log = document.querySelector('.header__log');
		reg = document.querySelector('.header__reg');

		request = document.querySelector('.header__request');

		coverTitle = document.querySelector('.cover__title');

		coverNeed = document.querySelector('.cover__need');
		coverCan = document.querySelector('.cover__can');

		subcoverText = document.querySelector('.subcover__text');

		storiesTitle = document.querySelector('.stories__title');

		cardSubtitles = document.querySelectorAll('.card__subtitle');
		cardTexts = document.querySelectorAll('.card__text');

		footerLinks = document.querySelectorAll('.footer__link');


	function switchLang() {
		if (localStorage.getItem('lang') == 'En') {

			lang.value = 'En';

			request.textContent = 'Submit your application';

			coverTitle.textContent = 'Palm world';
			coverNeed.textContent = 'I need to pass';
			coverCan.textContent = 'I can pass';

			subcoverText.textContent = 'Likewise, the beginning of daily work to build a position largely determines the creation of a personnel training system that meets urgent needs. Thus, the constant quantitative growth and scope of our activity to a large extent.';
			
			storiesTitle.textContent = 'Stories';

			cardSubtitles[0].innerHTML = '<span class="card__name">Emily</span>, 27, London';
			cardSubtitles[1].innerHTML = '<span class="card__name">Jacob</span>, 34, Paris';
			cardSubtitles[2].innerHTML = '<span class="card__name">Anna</span>, 22, Moscow';
			cardSubtitles[3].innerHTML = '<span class="card__name">Mark</span>, 24, Minsk';
			cardSubtitles[4].innerHTML = '<span class="card__name">Jessica</span>, 43, Washington';
			cardSubtitles[5].innerHTML = '<span class="card__name">Omar</span>, 25, Spain';

			cardTexts[0].textContent = 'Likewise, the beginning of daily work to build a position largely determines the creation of a personnel training system that meets urgent needs. Thus, the constant quantitative growth and scope of our activity largely determines the creation. Dear friends, the constant quantitative growth and scope of our activity is an interesting experiment in testing forms of exposure!';
			cardTexts[1].textContent = 'Likewise, the beginning of daily work to build a position largely determines the creation of a personnel training system that meets urgent needs. Thus, the constant quantitative growth and scope of our activity largely determines the creation. Dear friends, the constant quantitative growth and scope of our activity is an interesting experiment in testing forms of exposure!';
			cardTexts[2].textContent = 'Likewise, the beginning of daily work to build a position largely determines the creation of a personnel training system that meets urgent needs. Thus, the constant quantitative growth and scope of our activity largely determines the creation. Dear friends, the constant quantitative growth and scope of our activity is an interesting experiment in testing forms of exposure!';
			cardTexts[3].textContent = 'Likewise, the beginning of daily work to build a position largely determines the creation of a personnel training system that meets urgent needs. Thus, the constant quantitative growth and scope of our activity largely determines the creation. Dear friends, the constant quantitative growth and scope of our activity is an interesting experiment in testing forms of exposure!';
			cardTexts[4].textContent = 'Likewise, the beginning of daily work to build a position largely determines the creation of a personnel training system that meets urgent needs. Thus, the constant quantitative growth and scope of our activity largely determines the creation. Dear friends, the constant quantitative growth and scope of our activity is an interesting experiment in testing forms of exposure!';
			cardTexts[5].textContent = 'Likewise, the beginning of daily work to build a position largely determines the creation of a personnel training system that meets urgent needs. Thus, the constant quantitative growth and scope of our activity largely determines the creation. Dear friends, the constant quantitative growth and scope of our activity is an interesting experiment in testing forms of exposure!';
				
			footerLinks[0].textContent = 'About us';
			footerLinks[1].textContent = 'Frequently asked Questions';
			footerLinks[2].textContent = 'Legal advice';
			footerLinks[3].textContent = 'Contact us';
		}

		if (localStorage.getItem('lang') == 'Ru') {

			lang.value = 'Ru';

			request.textContent = 'Оставить заявку';

			coverTitle.textContent = 'Мир на ладошке';
			coverNeed.textContent = 'Мне нужно передать';
			coverCan.textContent = 'Я могу передать';

			subcoverText.textContent = 'Равным образом начало повседневной работы по формированию позиции в значительной степени обуславливает создание системы обучения кадров, соответствующей насущным потребностям. Таким образом, постоянный количественный рост и сфера нашей активности в значительной степени.';
			
			storiesTitle.textContent = 'Истории';
			
			cardSubtitles[0].innerHTML = '<span class="card__name">Эмили</span>, 27, Лондон';
			cardSubtitles[1].innerHTML = '<span class="card__name">Джейкоб</span>, 34, Париж';
			cardSubtitles[2].innerHTML = '<span class="card__name">Анна</span>, 22, Москва';
			cardSubtitles[3].innerHTML = '<span class="card__name">Марк</span>, 24, Минск';
			cardSubtitles[4].innerHTML = '<span class="card__name">Джессика</span>, 43, Вашингтон';
			cardSubtitles[5].innerHTML = '<span class="card__name">Омар</span>, 25, Испания';

			cardTexts[0].textContent = 'Равным образом начало повседневной работы по формированию позиции в значительной степени обуславливает создание системы обучения кадров, соответствующей насущным потребностям. Таким образом, постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание. Дорогие друзья, постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки форм воздействия!';
			cardTexts[1].textContent = 'Равным образом начало повседневной работы по формированию позиции в значительной степени обуславливает создание системы обучения кадров, соответствующей насущным потребностям. Таким образом, постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание. Дорогие друзья, постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки форм воздействия!';
			cardTexts[2].textContent = 'Равным образом начало повседневной работы по формированию позиции в значительной степени обуславливает создание системы обучения кадров, соответствующей насущным потребностям. Таким образом, постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание. Дорогие друзья, постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки форм воздействия!';
			cardTexts[3].textContent = 'Равным образом начало повседневной работы по формированию позиции в значительной степени обуславливает создание системы обучения кадров, соответствующей насущным потребностям. Таким образом, постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание. Дорогие друзья, постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки форм воздействия!';
			cardTexts[4].textContent = 'Равным образом начало повседневной работы по формированию позиции в значительной степени обуславливает создание системы обучения кадров, соответствующей насущным потребностям. Таким образом, постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание. Дорогие друзья, постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки форм воздействия!';
			cardTexts[5].textContent = 'Равным образом начало повседневной работы по формированию позиции в значительной степени обуславливает создание системы обучения кадров, соответствующей насущным потребностям. Таким образом, постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание. Дорогие друзья, постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки форм воздействия!';
				
			footerLinks[0].textContent = 'О нас';
			footerLinks[1].textContent = 'Часто задаваемые вопросы';
			footerLinks[2].textContent = 'Советы юристов';
			footerLinks[3].textContent = 'Связаться с нами';
		}
	}

	switchLang()

	lang.onchange = function() {
		localStorage.setItem('lang', lang.value);

		switchLang()
	}
}



