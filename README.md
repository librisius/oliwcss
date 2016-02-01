# Oliwcss
Данная документация написана для версии 1.0.0

## Оглавление
* [Введение](#Введение)
* [Разбор фреймворка oliwcss](#Разбор-фреймворка-oliwcss)

## Введение
Oliwcss был разработан для комфортного старта вёрстки проекта. Он призван упростить жизнь верстальщику и забыть о рутинной работе на протяжении всего проекта, стоит только скопировать начальнкю папку и изменить файл концигураций под свои нужды! Oliwcss включает в себя reset стилей, полезные less миксины, базовые стили основных элементов (формы, таблицы, кнопки, ссылки) и файлы конфигураций для их модификации.

Отличие данного фреймворка от всех остальных это его стиль использования. Oliwcss это не шаблонные стили для элементов, а стиль вёрстки элементов. Он не предлагает вам дефолтный стиль элементов, который сложно изменить и стилизовать под свой дизайн. Oliwcss даёт вам возможность верстать быстрее за счёт проработанной базы миксинов для выравнивания, позиционирования, использовании спрайтов, медиа запросов, адаптиции сайта под ретину.

Фактически Oliwcss включает для себя обширную библитеку less миксинов, которая и является сердцем фреймворка.

Метадология фреймворка частично придерживается стандартов <a href="http://operatino.github.io/MCSS/">mcss</a> и <a href="https://ru.bem.info/">БЭМ</a>.

## Разбор фреймворка oliwcss

### base
Фреймворк содержит в себе малозначительный раздел базовых стилей проекта. Малозначительный он в первую очередь, потому что фреймворк разчитан на использование функциональной части (миксинов), как уже было сказано выше.

Данный раздел может помочь если вам необходимо использовать какие-то стили по умолчанию, без специфического дизайна. Но не смотря на это все параметры этой папки легко редактируемы! Для редактирования базовых стилей наобходимо задавать/изменять значения переменным в папке settings.

<a href="http://oliwlife.ru/works/libris/oliwcss/" target="_blank"><b>Демо</b></a> некоторых базовых стилей с базовыми настройками
### mixins
#### buttons
#### center
#### elements
#### float
#### gradients
#### grid
#### images
#### links
#### lists
#### media
#### placeholder
#### position
#### retina
#### sprites
#### text
### settings
Настройки делятся на две части colors и options. Отделение файла цветов произошло в виду исторических причин.
### snippets
В разделе snippets собраны стили для частоиспользуемых элементов, которые не вошли в раздел base в виду отсутствия одноименных тегов. Это просто частоиспользуемые стили.
