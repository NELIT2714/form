$(document).ready(function() { // Создаём функцию
	$("form").submit(function() { // Ищем нашу форму
		var th = $(this)
		$.ajax({
			type: "POST",
			url: "mail.php", // Путь к нашему php файлу
			data: th.serialize()
		}).done(function() { // Удачное выполнение скрипта (Если отправка прошла успешно)
			alert("Thank you!") // Отправим надпись Thank you когда всё получится
			setTimeout(function() { // Установим отложенный запуск функции, через 1 секунду форма будет очищена
				th.trigger("reset") // Очистка формы
			}, 1000)
		});
		return false;
	})
})