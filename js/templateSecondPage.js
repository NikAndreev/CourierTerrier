$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 800, 'linear');
});



/* ПЛАВНЫЙ СКРОЛЛ */



$(document).ready(function() {

	$(".form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".form").trigger("reset");
		});
		return false;
	});
	
});


// ФОРМА


window.onload = function() {
	let lang = document.querySelector('.header__lang');
		options = document.querySelectorAll('.header__option');

		log = document.querySelector('.header__log');
		reg = document.querySelector('.header__reg');

		request = document.querySelector('.header__request');

		aboutTitle = document.querySelector('.about__title');
		aboutTexts = document.querySelectorAll('.about__text');

		questionsTitle = document.querySelector('.questions__title');
		questionsSubtitles = document.querySelectorAll('.question__subtitle');
		questionsTexts = document.querySelectorAll('.question__text');

		advicesTitle = document.querySelector('.advices__title');
		advicesTexts = document.querySelectorAll('.advices__text');

		connectionTitle = document.querySelector('.connection__title');
		formName = document.querySelector('.form__name');
		formEmail = document.querySelector('.form__email');
		formQuestion = document.querySelector('.form__question');
		formBtn = document.querySelector('.form__btn');

		footerLinks = document.querySelectorAll('.footer__link');


	function switchLang() {
		if (localStorage.getItem('lang') == 'En') {

			lang.value = 'En';

			request.textContent = 'Submit your application';

			aboutTitle.textContent='About us';
			aboutTexts[0].textContent='Higher-order considerations, as well as a course towards a socially-oriented national project, require us to systematically analyze the economic feasibility of decisions? Higher-order considerations, as well as a course towards a socially-oriented national project, to a large extent determine the creation of forms of influence! Everyday practice shows that the innovative path we have chosen requires the determination and refinement of the economic feasibility of the decisions made. Practical experience shows that constant quantitative growth and the scope of our activity requires us to analyze the personnel training system that meets urgent needs.';
			aboutTexts[1].textContent='A diverse and rich experience of socio-economic development requires us to analyze the existing financial and administrative conditions? On the other hand, a consultation with IT professionals creates the prerequisites for a qualitatively new step for a personnel training system that meets current needs? In the same way, the further development of various forms of activity provides a wide circle of specialists with participation in the formation of existing financial and administrative conditions?';
			
			questionsTitle.textContent='Frequently asked Questions';
			questionsSubtitles[0].textContent='Higher considerations, as well as a socially oriented course?';
			questionsSubtitles[1].textContent='Higher considerations, as well as a socially oriented course?';
			questionsSubtitles[2].textContent='Higher considerations, as well as a socially oriented course?';
			questionsSubtitles[3].textContent='Higher considerations, as well as a socially oriented course?';
			questionsTexts[0].textContent='The national project requires us to conduct a systematic analysis of the economic feasibility of the decisions made.';
			questionsTexts[1].textContent='The national project requires us to conduct a systematic analysis of the economic feasibility of the decisions made.';
			questionsTexts[2].textContent='The national project requires us to conduct a systematic analysis of the economic feasibility of the decisions made.';
			questionsTexts[3].textContent='The national project requires us to conduct a systematic analysis of the economic feasibility of the decisions made.';
			
			advicesTitle.textContent='Legal advice';
			advicesTexts[0].textContent='Higher-order considerations, as well as a course towards a socially-oriented national project, require us to systematically analyze the economic feasibility of decisions? Higher-order considerations, as well as a course towards a socially-oriented national project, to a large extent determine the creation of forms of influence!';
			advicesTexts[1].textContent='Everyday practice shows that the innovative path we have chosen requires the determination and refinement of the economic feasibility of the decisions made. Practical experience shows that constant quantitative growth and the scope of our activity requires us to analyze the personnel training system that meets urgent needs.';
			advicesTexts[2].textContent='A diverse and rich experience of socio-economic development requires us to analyze the existing financial and administrative conditions? On the other hand, a consultation with IT professionals creates the prerequisites for a qualitatively new step for a personnel training system that meets current needs? In the same way, the further development of various forms of activity provides a wide circle of specialists with participation in the formation of existing financial and administrative conditions?';
			
			connectionTitle.textContent='Contact us';
			formName.placeholder='Your name';
			formQuestion.placeholder="Question";
			formBtn.textContent='To ask';

			footerLinks[0].textContent = 'About us';
			footerLinks[1].textContent = 'Frequently asked Questions';
			footerLinks[2].textContent = 'Legal advice';
			footerLinks[3].textContent = 'Contact us';
		}

		if (localStorage.getItem('lang') == 'Ru') {

			lang.value = 'Ru';

			request.textContent = 'Оставить заявку';

			aboutTitle.textContent='О нас';
			aboutTexts[0].textContent='Соображения высшего порядка, а также курс на социально-ориентированный национальный проект требует от нас системного анализа экономической целесообразности принимаемых решений? Соображения высшего порядка, а также курс на социально-ориентированный национальный проект в значительной степени обуславливает создание форм воздействия! Повседневная практика показывает, что выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений.Практический опыт показывает, что постоянный количественный рост и сфера нашей активности требует от нас анализа системы обучения кадров, соответствующей насущным потребностям.';
			aboutTexts[1].textContent='Разнообразный и богатый опыт социально-экономическое развитие требует от нас анализа существующих финансовых и административных условий? С другой стороны консультация с профессионалами из IT создаёт предпосылки качественно новых шагов для системы обучения кадров, соответствующей насущным потребностям? Равным образом дальнейшее развитие различных форм деятельности обеспечивает широкому кругу специалистов участие в формировании существующих финансовых и административных условий?';
			
			questionsTitle.textContent='Часто задаваемые вопросы';
			questionsSubtitles[0].textContent='Соображения высшего порядка, а также курс на социально-ориентированный?';
			questionsSubtitles[1].textContent='Соображения высшего порядка, а также курс на социально-ориентированный?';
			questionsSubtitles[2].textContent='Соображения высшего порядка, а также курс на социально-ориентированный?';
			questionsSubtitles[3].textContent='Соображения высшего порядка, а также курс на социально-ориентированный?';
			questionsTexts[0].textContent='Национальный проект требует от нас системного анализа экономической целесообразности принимаемых решений.';
			questionsTexts[1].textContent='Национальный проект требует от нас системного анализа экономической целесообразности принимаемых решений.';
			questionsTexts[2].textContent='Национальный проект требует от нас системного анализа экономической целесообразности принимаемых решений.';
			questionsTexts[3].textContent='Национальный проект требует от нас системного анализа экономической целесообразности принимаемых решений.';
			
			advicesTitle.textContent='Советы юристов';
			advicesTexts[0].textContent='Соображения высшего порядка, а также курс на социально-ориентированный национальный проект требует от нас системного анализа экономической целесообразности принимаемых решений? Соображения высшего порядка, а также курс на социально-ориентированный национальный проект в значительной степени обуславливает создание форм воздействия! ';
			advicesTexts[1].textContent='Повседневная практика показывает, что выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений. Практический опыт показывает, что постоянный количественный рост и сфера нашей активности требует от нас анализа системы обучения кадров, соответствующей насущным потребностям. ';
			advicesTexts[2].textContent='Разнообразный и богатый опыт социально-экономическое развитие требует от нас анализа существующих финансовых и административных условий? С другой стороны консультация с профессионалами из IT создаёт предпосылки качественно новых шагов для системы обучения кадров, соответствующей насущным потребностям? Равным образом дальнейшее развитие различных форм деятельности обеспечивает широкому кругу специалистов участие в формировании существующих финансовых и административных условий?';
			
			connectionTitle.textContent='Связаться с нами';
			formName.placeholder='Ваше имя';
			formQuestion.placeholder="Вопрос";
			formBtn.textContent='Спросить';

			footerLinks[0].textContent = 'О нас';
			footerLinks[1].textContent = 'Часто задаваемые вопросы';
			footerLinks[2].textContent = 'Советы юристов';
			footerLinks[3].textContent = 'Связаться с нами';
		}
	}

	switchLang()

	lang.onchange = function() {
		localStorage.setItem('lang', lang.value);
		switchLang();
	}
}

