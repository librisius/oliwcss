# Oliwcss
Данная документация написана для версии 1.0.0

ВНИМАНИЕ! ДОКУМЕНТАЦИЯ В РАЗРАБОТКЕ! In English soon...

## Оглавление
* [Введение](#Введение)
* [Быстрый старт](#Быстрый-старт)
* [Разбор фреймворка oliwcss](#Разбор-фреймворка-oliwcss)

## Введение
Oliwcss был разработан для комфортного старта вёрстки проекта. Он призван упростить жизнь верстальщику и забыть о рутинной работе на протяжении всего проекта, стоит только скопировать начальнкю папку и изменить файл концигураций под свои нужды! Oliwcss включает в себя reset стилей, полезные less миксины, базовые стили основных элементов (формы, таблицы, кнопки, ссылки) и файлы конфигураций для их модификации.

Отличие данного фреймворка от всех остальных это его стиль использования. Oliwcss это не шаблонные стили для элементов, а стиль вёрстки элементов. Он не предлагает вам дефолтный стиль элементов, который сложно изменить и стилизовать под свой дизайн. Oliwcss даёт вам возможность верстать быстрее за счёт проработанной базы миксинов для выравнивания, позиционирования, использовании спрайтов, медиа запросов, адаптиции сайта под ретину.

Фактически Oliwcss включает для себя обширную библитеку less миксинов, которая и является сердцем фреймворка.

Метадология фреймворка частично придерживается стандартов <a href="http://operatino.github.io/MCSS/">mcss</a> и <a href="https://ru.bem.info/">БЭМ</a>.

## Быстрый старт
Oliwcss лежит по пути desktop ─> code ─> app ─> less

### Карта папок
```
less/
├── core/
│   ├── base/
│   │   ├── br.less
│   │   ├── buttons.less
│   │   ├── common.less
│   │   ├── forms.less
│   │   ├── links.less
│   │   ├── reset.less
│   │   ├── tables.less
│   │   └── typography.less
│   ├── mixins/
│   │   ├── buttons.less
│   │   ├── center.less
│   │   ├── elements.less
│   │   ├── float.less
│   │   ├── gradients.less
│   │   ├── grid.less
│   │   ├── images.less
│   │   ├── links.less
│   │   ├── lists.less
│   │   ├── media.less
│   │   ├── placeholder.less
│   │   ├── position.less
│   │   ├── retina.less
│   │   ├── sprites.less
│   │   └── text.less
│   ├── settings/
│   │   ├── colors.less
│   │   └── options.less
│   ├── snippets/
│   │   ├── container.less
│   │   ├── float.less
│   │   └── tabs.less
│   └── index.less
├── experimental/
│   ├── index.less
│   └── libris.less
├── project/
│   └── index.less
├── all.less
└── fonts.less
```

## Разбор фреймворка oliwcss (base)
Фреймворк содержит в себе малозначительный раздел базовых стилей проекта. Малозначительный он в первую очередь, потому что фреймворк разчитан на использование функциональной части (миксинов), как уже было сказано выше.

Данный раздел может помочь если вам необходимо использовать какие-то стили по умолчанию, без специфического дизайна. Но не смотря на это все параметры этой папки легко редактируемы! Для редактирования базовых стилей наобходимо задавать/изменять значения переменным в папке settings.

<a href="http://oliwlife.ru/works/libris/oliwcss/" target="_blank"><b>Демо</b></a> некоторых базовых стилей с базовыми настройками
## Разбор фреймворка oliwcss (mixins)
Главный раздел фреймворка - mixins. На его изучение будет возможно потрачено не мало времени, которое в последствии окупится. Тут содержатся миксины как от создателя oliwcss так и частично других фреймворков. Миксины позволяют не только стилизовать блоки быстрее, но и забыть о багах при верном их использовании.

### buttons

#### ._mx_btn-variant()

##### Параметры:  
* @c-btn  
* @c-btn_hover  
* @per-btn_hover: @per-btn_hover  
* @brd_c-btn: @c-btn

#### ._mx_btn-default-variant()

##### Параметры:  
* @c-btn  
* @bg-btn  
* @per-btn_hover: @per-btn_hover  
* @per-btn_active: @per-btn_active  
* @brd_c-btn: @c-btn

#### ._mx_btn-link()
Параметры:  
* @brd-b-c-btn  
* @c-btn  
* @brd-b-c-btn_hover  
* @c-btn_hover

#### ._mx_btn-filled-variant()

##### Параметры:  
* @c-btn  
* @bg-btn 
* @per-brd  
* @per-btn_hover: @per-btn_hover  
* @per-btn_active: @per-btn_active  
* @brd_c-btn: darken(@bg-btn, @per-brd); 

#### ._mx_btn-size()

##### Параметры:  
@w-btn  
@h-btn  
@brd_rd-btn  
@p_vert-btn  
@p_horiz-btn  
@f_sz-btn  
@lh-btn  
@brd_w-btn  
### center

#### ._mx_center()

#### ._mx_center-pos()
Параметры:  
@w  
@h  
@t: 50%  
@l: 50%

#### ._mx_center-pos_min()

Параметры:  
@w  
@h

#### ._mx_center-pos_xm()

Параметры:  
@w  
@h

#### ._mx_center-tsf()

#### ._mx_center-tsf_x()

#### ._mx_center-tsf_y()

### elements

#### ._mx_e-headings()

#### ._mx_e-h1()

#### ._mx_e-h2()

#### ._mx_e-h3()

#### ._mx_e-h4()

#### ._mx_e-h5()

#### ._mx_e-h6()

#### ._mx_e-p()

#### ._mx_e-b()

#### ._mx_e-btns()

### float

#### ._mx_float()

Параметры:  
@item: ~'.-ol-item'

#### ._mx_float-r()

Параметры:  
@item: ~'.-ol-item'

#### ._mx_float-justify()

Параметры:  
@item: ~'.-ol-item'

### gradients

Устаревший!

### grid

#### ._mx_grid()

Параметры:  
@padding  
@rows 
@counter: 1

### images

### links

### lists

### media

### placeholder

### position

### retina

### sprites

### text

## settings

Настройки делятся на две части colors и options. Отделение файла цветов произошло в виду исторических причин.

## snippets

В разделе snippets собраны стили для частоиспользуемых элементов, которые не вошли в раздел base в виду отсутствия одноименных тегов. Это просто частоиспользуемые стили.
