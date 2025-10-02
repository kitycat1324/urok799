// Данные о товарах
const products = {
    // Холодильники (1-3)
    1: {
        id: 1,
        name: "Холодильник Samsung RB37",
        price: 54990,
        category: "refrigerators",
        images: [
            "https://via.placeholder.com/500x400/27ae60/ffffff?text=Samsung+RB37",
            "https://via.placeholder.com/500x400/219653/ffffff?text=Вид+2",
            "https://via.placeholder.com/500x400/2ecc71/ffffff?text=Внутреннее+устройство"
        ],
        description: "Современный холодильник с системой No Frost и энергопотреблением класса A+.",
        features: [
            "Объем: 367 л",
            "No Frost",
            "Энергопотребление: A+",
            "Зона свежести",
            "Инверторный компрессор",
            "Автономное сохранение холода: 15 часов"
        ],
        fullDescription: "Холодильник Samsung RB37 — это современное решение для вашей кухни. Благодаря системе No Frost вам больше не придется размораживать холодильник. Технология инверторного компрессора обеспечивает низкий уровень шума и энергопотребления. Специальная зона свежести сохраняет продукты свежими дольше."
    },
    2: {
        id: 2,
        name: "Холодильник LG Side by Side",
        price: 89990,
        category: "refrigerators",
        images: [
            "https://via.placeholder.com/500x400/27ae60/ffffff?text=LG+Side+by+Side",
            "https://via.placeholder.com/500x400/219653/ffffff?text=Вид+2",
            "https://via.placeholder.com/500x400/2ecc71/ffffff?text=Диспенсер"
        ],
        description: "Просторный холодильник Side by Side с двойной системой No Frost.",
        features: [
            "Объем: 635 л",
            "Двойная система No Frost",
            "Диспенсер для воды и льда",
            "Смарт-функции",
            "Энергопотребление: A++",
            "Линейный инверторный компрессор"
        ],
        fullDescription: "Холодильник LG Side by Side предлагает невероятно просторное внутреннее пространство и передовые технологии. Двойная система No Frost предотвращает образование инея как в холодильной, так и в морозильной камерах. Встроенный диспенсер позволяет получать холодную воду и лед, не открывая дверцу."
    },
    3: {
        id: 3,
        name: "Холодильник Bosch MultiDoor",
        price: 76490,
        category: "refrigerators",
        images: [
            "https://via.placeholder.com/500x400/27ae60/ffffff?text=Bosch+MultiDoor",
            "https://via.placeholder.com/500x400/219653/ffffff?text=Вид+2",
            "https://via.placeholder.com/500x400/2ecc71/ffffff?text=Внутреннее+устройство"
        ],
        description: "Инновационный многодверный холодильник с технологией VitaFresh.",
        features: [
            "Объем: 569 л",
            "4 двери",
            "Технология VitaFresh",
            "No Frost",
            "Энергопотребление: A++",
            "Система охлаждения MultiAirflow"
        ],
        fullDescription: "Холодильник Bosch MultiDoor с четырьмя дверьми предлагает удобный доступ к разным зонам хранения. Технология VitaFresh поддерживает оптимальную температуру и влажность для длительного сохранения свежести фруктов, овощей, мяса и рыбы. Система MultiAirflow обеспечивает равномерное распределение холодного воздуха по всему объему холодильника."
    },

    // Стиральные машины (4-6)
    4: {
        id: 4,
        name: "Стиральная машина Indesit",
        price: 24990,
        category: "washing-machines",
        images: [
            "https://via.placeholder.com/500x400/3498db/ffffff?text=Indesit",
            "https://via.placeholder.com/500x400/2980b9/ffffff?text=Панель+управления",
            "https://via.placeholder.com/500x400/1f618d/ffffff?text=Внутренний+барабан"
        ],
        description: "Надежная и экономичная стиральная машина с фронтальной загрузкой.",
        features: [
            "Загрузка: 7 кг",
            "Отжим: 1000 об/мин",
            "Энергопотребление: A++",
            "16 программ стирки",
            "Защита от протечек",
            "Отсрочка старта"
        ],
        fullDescription: "Стиральная машина Indesit — это надежный помощник в вашем доме. С 16 программами стирки она справится с любыми типами тканей. Технология защиты от протечек обеспечивает безопасность использования. Функция отсрочки старта позволяет запланировать стирку на удобное для вас время."
    },
    5: {
        id: 5,
        name: "Стиральная машина LG с сушкой",
        price: 49990,
        category: "washing-machines",
        images: [
            "https://via.placeholder.com/500x400/3498db/ffffff?text=LG+С+сушкой",
            "https://via.placeholder.com/500x400/2980b9/ffffff?text=Панель+управления",
            "https://via.placeholder.com/500x400/1f618d/ffffff?text=Технология+Steam"
        ],
        description: "Стиральная машина с функцией сушки и технологией Steam.",
        features: [
            "Загрузка: 9 кг",
            "Сушка: 6 кг",
            "Технология Steam",
            "Прямой привод",
            "Энергопотребление: A+++",
            "Смарт-функции"
        ],
        fullDescription: "Стиральная машина LG с функцией сушки — это комплексное решение для ухода за одеждой. Технология Steam позволяет освежать вещи, уменьшать аллергены и разглаживать складки. Прямой привод обеспечивает тихую работу и долговечность. Смарт-функции позволяют управлять стиркой удаленно через приложение."
    },
    6: {
        id: 6,
        name: "Стиральная машина Bosch Serie 6",
        price: 67990,
        category: "washing-machines",
        images: [
            "https://via.placeholder.com/500x400/3498db/ffffff?text=Bosch+Serie+6",
            "https://via.placeholder.com/500x400/2980b9/ffffff?text=ЭкоПульс",
            "https://via.placeholder.com/500x400/1f618d/ffffff?text=AntiVibration"
        ],
        description: "Инновационная стиральная машина с технологией EcoSilence Drive.",
        features: [
            "Загрузка: 8 кг",
            "Отжим: 1200 об/мин",
            "EcoSilence Drive",
            "AntiVibration",
            "EcoPerfect",
            "SpeedPerfect"
        ],
        fullDescription: "Стиральная машина Bosch Serie 6 сочетает в себе инновационные технологии и немецкое качество. Технология EcoSilence Drive обеспечивает тихую работу и долговечность. Система AntiVibration уменьшает вибрацию при отжиме."
    },

    // Телевизоры (7-9)
    7: {
        id: 7,
        name: "Телевизор Samsung QLED 55\"",
        price: 89990,
        category: "tvs",
        images: [
            "https://via.placeholder.com/500x400/e74c3c/ffffff?text=Samsung+QLED+55",
            "https://via.placeholder.com/500x400/c0392b/ffffff?text=Smart+TV",
            "https://via.placeholder.com/500x400/922b21/ffffff?text=Тонкий+дизайн"
        ],
        description: "QLED телевизор с технологией квантовых точек и 4K разрешением.",
        features: [
            "Диагональ: 55 дюймов",
            "Разрешение: 4K UHD",
            "QLED технология",
            "Smart TV",
            "HDR10+",
            "Quantum Processor"
        ],
        fullDescription: "Телевизор Samsung QLED с технологией квантовых точек обеспечивает невероятно яркое и реалистичное изображение. Процессор Quantum Processor оптимизирует контент в реальном времени. Поддержка HDR10+ обеспечивает идеальную цветопередачу."
    },
    8: {
        id: 8,
        name: "Телевизор LG OLED 65\"",
        price: 129990,
        category: "tvs",
        images: [
            "https://via.placeholder.com/500x400/e74c3c/ffffff?text=LG+OLED+65",
            "https://via.placeholder.com/500x400/c0392b/ffffff?text=OLED+технология",
            "https://via.placeholder.com/500x400/922b21/ffffff?text=webOS"
        ],
        description: "OLED телевизор с идеальным черным цветом и бесконечной контрастностью.",
        features: [
            "Диагональ: 65 дюймов",
            "Разрешение: 4K UHD",
            "OLED технология",
            "webOS Smart TV",
            "Dolby Vision",
            "α9 процессор"
        ],
        fullDescription: "Телевизор LG OLED с самоподсвечивающимися пикселями обеспечивает идеальный черный цвет и бесконечную контрастность. Процессор α9 обеспечивает превосходное качество изображения и звука. Платформа webOS предлагает удобный доступ к контенту."
    },
    9: {
        id: 9,
        name: "Телевизор Sony Bravia 43\"",
        price: 54990,
        category: "tvs",
        images: [
            "https://via.placeholder.com/500x400/e74c3c/ffffff?text=Sony+Bravia+43",
            "https://via.placeholder.com/500x400/c0392b/ffffff?text=TRILUMINOS",
            "https://via.placeholder.com/500x400/922b21/ffffff?text=X1+Processor"
        ],
        description: "LED телевизор с технологией TRILUMINOS и процессором X1.",
        features: [
            "Диагональ: 43 дюйма",
            "Разрешение: 4K HDR",
            "TRILUMINOS Display",
            "X1 Processor",
            "Android TV",
            "X-Reality PRO"
        ],
        fullDescription: "Телевизор Sony Bravia с технологией TRILUMINOS воспроизводит более широкий спектр цветов. Процессор X1 обеспечивает детализированное и четкое изображение. Платформа Android TV предлагает множество приложений и игр."
    },

    // Кухонная утварь (10-12)
    10: {
        id: 10,
        name: "Блендер Philips HR3652",
        price: 8990,
        category: "kitchen-utensils",
        images: [
            "https://via.placeholder.com/500x400/9b59b6/ffffff?text=Philips+Blender",
            "https://via.placeholder.com/500x400/8e44ad/ffffff?text=Мощный+мотор",
            "https://via.placeholder.com/500x400/71368a/ffffff?text=Насадки"
        ],
        description: "Мощный блендер с технологией ProBlend и 6 скоростями.",
        features: [
            "Мощность: 1400 Вт",
            "6 скоростей + турборежим",
            "Технология ProBlend",
            "Объем кувшина: 2 л",
            "Ножи из нержавеющей стали",
            "Защита от перегрева"
        ],
        fullDescription: "Блендер Philips HR3652 с технологией ProBlend обеспечивает идеальное смешивание ингредиентов. Мощный двигатель и острые ножи из нержавеющей стали справляются даже с твердыми продуктами. 6 скоростей и турборежим позволяют выбрать оптимальный режим работы."
    },
    11: {
        id: 11,
        name: "Миксер Bosch MFQ4030",
        price: 4590,
        category: "kitchen-utensils",
        images: [
            "https://via.placeholder.com/500x400/9b59b6/ffffff?text=Bosch+Mixer",
            "https://via.placeholder.com/500x400/8e44ad/ffffff?text=Венчики",
            "https://via.placeholder.com/500x400/71368a/ffffff?text=Эргономичный+дизайн"
        ],
        description: "Ручной миксер с 5 скоростями и функцией турбо.",
        features: [
            "Мощность: 450 Вт",
            "5 скоростей + турборежим",
            "Эргономичная ручка",
            "Венчики для взбивания",
            "Крюки для замеса",
            "Легкая очистка"
        ],
        fullDescription: "Ручной миксер Bosch MFQ4030 идеально подходит для взбивания кремов, приготовления теста и смешивания ингредиентов. Эргономичная ручка обеспечивает комфортное использование. Съемные насадки легко моются."
    },
    12: {
        id: 12,
        name: "Электрогриль Tefal GC722",
        price: 12990,
        category: "kitchen-utensils",
        images: [
            "https://via.placeholder.com/500x400/9b59b6/ffffff?text=Tefal+Grill",
            "https://via.placeholder.com/500x400/8e44ad/ffffff?text=Антипригарное+покрытие",
            "https://via.placeholder.com/500x400/71368a/ffffff?text=Регулируемый+нагрев"
        ],
        description: "Электрогриль с антипригарным покрытием и регулируемой температурой.",
        features: [
            "Мощность: 2000 Вт",
            "Площадь гриля: 36x26 см",
            "Антипригарное покрытие",
            "Регулируемая температура",
            "Съемные панели",
            "Индикатор нагрева"
        ],
        fullDescription: "Электрогриль Tefal GC722 позволяет готовить здоровую пищу с минимальным использованием масла. Антипригарное покрытие обеспечивает легкое очищение. Съемные панели можно мыть в посудомоечной машине."
    },

    // Мойки (13-15)
    13: {
        id: 13,
        name: "Кухонная мойка Blanco Farga",
        price: 18990,
        category: "sinks",
        images: [
            "https://via.placeholder.com/500x400/f39c12/ffffff?text=Blanco+Farga",
            "https://via.placeholder.com/500x400/e67e22/ffffff?text=Грандионовое+покрытие",
            "https://via.placeholder.com/500x400/d35400/ffffff?text=Дополнительная+чаша"
        ],
        description: "Кухонная мойка из нержавеющей стали с антибактериальным покрытием.",
        features: [
            "Материал: нержавеющая сталь",
            "Размер: 50x50 см",
            "2 чаши",
            "Антибактериальное покрытие",
            "Шумоизоляция",
            "Защита от конденсата"
        ],
        fullDescription: "Кухонная мойка Blanco Farga изготовлена из высококачественной нержавеющей стали. Антибактериальное покрытие предотвращает размножение бактерий. Система шумоизоляции делает использование комфортным."
    },
    14: {
        id: 14,
        name: "Мойка Franke Rondo 1.5",
        price: 23990,
        category: "sinks",
        images: [
            "https://via.placeholder.com/500x400/f39c12/ffffff?text=Franke+Rondo",
            "https://via.placeholder.com/500x400/e67e22/ffffff?text=Грандионовое+покрытие",
            "https://via.placeholder.com/500x400/d35400/ffffff?text=Эргономичный+дизайн"
        ],
        description: "Грандионовая мойка с повышенной устойчивостью к повреждениям.",
        features: [
            "Материал: грандион",
            "Размер: 45x45 см",
            "1 чаша",
            "Устойчивость к царапинам",
            "Легкая очистка",
            "Современный дизайн"
        ],
        fullDescription: "Мойка Franke Rondo изготовлена из инновационного материала грандион, который сочетает прочность керамики и эластичность стали. Устойчива к царапинам и ударам. Легко очищается от загрязнений."
    },
    15: {
        id: 15,
        name: "Мойка с сушилкой Teka TRS 1.0",
        price: 15990,
        category: "sinks",
        images: [
            "https://via.placeholder.com/500x400/f39c12/ffffff?text=Teka+TRS",
            "https://via.placeholder.com/500x400/e67e22/ffffff?text=Встроенная+сушилка",
            "https://via.placeholder.com/500x400/d35400/ffffff?text=Дополнительный+поддон"
        ],
        description: "Мойка со встроенной сушилкой для посуды.",
        features: [
            "Материал: нержавеющая сталь",
            "Размер: 48x48 см",
            "1 чаша + сушилка",
            "Встроенный поддон",
            "Брызгозащитный край",
            "Легкий уход"
        ],
        fullDescription: "Мойка Teka TRS оснащена удобной встроенной сушилкой для посуды. Брызгозащитный край предотвращает попадание воды на столешницу. Дополнительный поддон удобен для мытья овощей и фруктов."
    },

    // Краны (16-18)
    16: {
        id: 16,
        name: "Смеситель для кухни Grohe Eurosmart",
        price: 8990,
        category: "faucets",
        images: [
            "https://via.placeholder.com/500x400/34495e/ffffff?text=Grohe+Eurosmart",
            "https://via.placeholder.com/500x400/2c3e50/ffffff?text=Керамический+картридж",
            "https://via.placeholder.com/500x400/1c2833/ffffff?text=Эргономичный+излив"
        ],
        description: "Однорычажный смеситель с керамическим картриджем.",
        features: [
            "Материал: латунь",
            "Покрытие: хром",
            "Керамический картридж",
            "Высота излива: 25 см",
            "Поворот на 360°",
            "Легкая установка"
        ],
        fullDescription: "Смеситель Grohe Eurosmart сочетает в себе немецкое качество и современный дизайн. Керамический картридж обеспечивает плавную работу и долгий срок службы. Поворотный излив упрощает использование."
    },
    17: {
        id: 17,
        name: "Смеситель Hansa Finesse",
        price: 12990,
        category: "faucets",
        images: [
            "https://via.placeholder.com/500x400/34495e/ffffff?text=Hansa+Finesse",
            "https://via.placeholder.com/500x400/2c3e50/ffffff?text=Выдвижной+излив",
            "https://via.placeholder.com/500x400/1c2833/ffffff?text=Аэратор"
        ],
        description: "Смеситель с выдвижным изливом и функцией душ.",
        features: [
            "Материал: латунь",
            "Покрытие: хром",
            "Выдвижной излив",
            "Функция душ",
            "Аэратор",
            "Гибкий шланг 1.5 м"
        ],
        fullDescription: "Смеситель Hansa Finesse с выдвижным изливом обеспечивает максимальное удобство при использовании. Функция душ идеальна для мытья посуды и продуктов. Аэратор экономит воду без потери комфорта."
    },
    18: {
        id: 18,
        name: "Смеситель Blanco Subline 2.0",
        price: 15990,
        category: "faucets",
        images: [
            "https://via.placeholder.com/500x400/34495e/ffffff?text=Blanco+Subline",
            "https://via.placeholder.com/500x400/2c3e50/ffffff?text=Бесконтактный+сенсор",
            "https://via.placeholder.com/500x400/1c2833/ffffff?text=Термостат"
        ],
        description: "Бесконтактный смеситель с сенсорным управлением.",
        features: [
            "Материал: латунь",
            "Покрытие: хром",
            "Бесконтактное управление",
            "Термостат",
            "Экономия воды",
            "Гигиеничность"
        ],
        fullDescription: "Смеситель Blanco Subline с бесконтактным управлением обеспечивает максимальную гигиеничность. Встроенный термостат поддерживает заданную температуру воды. Технология экономии воды снижает расход на 50%."
    },

    // Приборы для волос (19-21)
    19: {
        id: 19,
        name: "Фен Dyson Supersonic",
        price: 39990,
        category: "hair-care",
        images: [
            "https://via.placeholder.com/500x400/e91e63/ffffff?text=Dyson+Supersonic",
            "https://via.placeholder.com/500x400/ad1457/ffffff?text=Технология+Air+Multiplier",
            "https://via.placeholder.com/500x400/880e4f/ffffff?text=Насадки"
        ],
        description: "Инновационный фен с технологией Air Multiplier.",
        features: [
            "Мощность: 1600 Вт",
            "Технология Air Multiplier",
            "Защита от перегрева",
            "3 скорости + 4 температуры",
            "4 насадки в комплекте",
            "Бесщеточный двигатель"
        ],
        fullDescription: "Фен Dyson Supersonic с технологией Air Multiplier создает мощный направленный поток воздуха без перегрева. Бесщеточный двигатель обеспечивает тихую работу. Интеллектуальный контроль температуры защищает волосы от повреждений."
    },
    20: {
        id: 20,
        name: "Выпрямитель для волос GHD Platinum+",
        price: 14990,
        category: "hair-care",
        images: [
            "https://via.placeholder.com/500x400/e91e63/ffffff?text=GHD+Platinum",
            "https://via.placeholder.com/500x400/ad1457/ffffff?text=Ультра-гладкие+пластины",
            "https://via.placeholder.com/500x400/880e4f/ffffff?text=Технология+Tri-Zone"
        ],
        description: "Профессиональный выпрямитель с технологией Tri-Zone.",
        features: [
            "Температура: 185°C",
            "Технология Tri-Zone",
            "Ультра-гладкие пластины",
            "Быстрый нагрев",
            "Автоотключение",
            "Поворотный шнур"
        ],
        fullDescription: "Выпрямитель GHD Platinum+ с технологией Tri-Zone обеспечивает равномерное распределение тепла по всей длине пластин. Ультра-гладкие пластины бережно воздействуют на волосы. Функция автоотключения обеспечивает безопасность."
    },
    21: {
        id: 21,
        name: "Щипцы для завивки Remington CI95E",
        price: 5990,
        category: "hair-care",
        images: [
            "https://via.placeholder.com/500x400/e91e63/ffffff?text=Remington+CI95E",
            "https://via.placeholder.com/500x400/ad1457/ffffff?text=Керамическое+покрытие",
            "https://via.placeholder.com/500x400/880e4f/ffffff?text=Автоматическое+вращение"
        ],
        description: "Автоматические щипцы для завивки с керамическим покрытием.",
        features: [
            "Диаметр: 25 мм",
            "Автоматическое вращение",
            "Керамическое покрытие",
            "3 температуры",
            "Таймер",
            "Защита от перегрева"
        ],
        fullDescription: "Щипцы для завивки Remington CI95E с автоматическим вращением создают идеальные локоны без усилий. Керамическое покрытие обеспечивает равномерное распределение тепла. Функция таймера помогает контролировать время завивки."
    },

    // Антенны (22-24)
    22: {
        id: 22,
        name: "Комнатная антенна Selenga 111A",
        price: 1290,
        category: "antennas",
        images: [
            "https://via.placeholder.com/500x400/795548/ffffff?text=Selenga+111A",
            "https://via.placeholder.com/500x400/5d4037/ffffff?text=Усилитель+сигнала",
            "https://via.placeholder.com/500x400/4e342e/ffffff?text=Компактный+дизайн"
        ],
        description: "Комнатная антенна с усилителем для приема цифрового ТВ.",
        features: [
            "Тип: комнатная",
            "Диапазон: ДМВ",
            "Встроенный усилитель",
            "Дальность приема: 30 км",
            "Питание: USB",
            "Компактный размер"
        ],
        fullDescription: "Комнатная антенна Selenga 111A предназначена для приема цифрового эфирного телевидения. Встроенный усилитель улучшает качество сигнала. Компактный дизайн позволяет легко разместить антенну в любом месте комнаты."
    },
    23: {
        id: 23,
        name: "Уличная антенна Locus Meridian 14",
        price: 3490,
        category: "antennas",
        images: [
            "https://via.placeholder.com/500x400/795548/ffffff?text=Locus+Meridian",
            "https://via.placeholder.com/500x400/5d4037/ffffff?text=Алюминиевые+элементы",
            "https://via.placeholder.com/500x400/4e342e/ffffff?text=Ветроустойчивая+конструкция"
        ],
        description: "Уличная антенна для приема цифрового и аналогового ТВ.",
        features: [
            "Тип: уличная",
            "Диапазон: ДМВ/МВ",
            "Коэффициент усиления: 14 дБ",
            "Дальность приема: 60 км",
            "Алюминиевая конструкция",
            "Защита от коррозии"
        ],
        fullDescription: "Уличная антенна Locus Meridian 14 обеспечивает стабильный прием цифрового и аналогового телевидения на расстоянии до 60 км. Прочная алюминиевая конструкция устойчива к ветровым нагрузкам. Защитное покрытие предотвращает коррозию."
    },
    24: {
        id: 24,
        name: "Спутниковая антенна Супрал 0.9м",
        price: 4590,
        category: "antennas",
        images: [
            "https://via.placeholder.com/500x400/795548/ffffff?text=Супрал+0.9м",
            "https://via.placeholder.com/500x400/5d4037/ffffff?text=Стальная+конструкция",
            "https://via.placeholder.com/500x400/4e342e/ffffff?text=Оцинкованное+покрытие"
        ],
        description: "Спутниковая антенна для приема телевидения Триколор и НТВ+.",
        features: [
            "Диаметр: 0.9 м",
            "Материал: сталь",
            "Оцинкованное покрытие",
            "Регулируемое крепление",
            "Для спутников Eutelsat/Express",
            "Простая установка"
        ],
        fullDescription: "Спутниковая антенна Супрал диаметром 0.9 метра предназначена для приема сигналов со спутников Eutelsat и Express. Прочная стальная конструкция с оцинкованным покрытием обеспечивает долговечность. Регулируемое крепление упрощает настройку."
    }
};

// Категории товаров
const categories = {
    'refrigerators': 'Холодильники',
    'washing-machines': 'Стиральные машины',
    'tvs': 'Телевизоры',
    'kitchen-utensils': 'Кухонная утварь',
    'sinks': 'Мойки',
    'faucets': 'Краны',
    'hair-care': 'Приборы для волос',
    'antennas': 'Антенны'
};


