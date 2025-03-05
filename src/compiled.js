(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['404/404'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['auth/auth'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"auth\">\r\n\r\n</div>";
},"useData":true});
templates['header/header'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"header__link\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"username") || (depth0 != null ? lookupProperty(depth0,"username") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"username","hash":{},"data":data,"loc":{"start":{"line":9,"column":30},"end":{"line":9,"column":42}}}) : helper)))
    + "</div>\r\n    <div class=\"header__link\">Выйти</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"header__button\">Создать резюме</div>\r\n    <div class=\"header__link\">Войти</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"header__name\"><b>Resu<span style=\"color:#F32526\">Match</span></b></div>\r\n<div class=\"header__links\">\r\n    <div class=\"header__link\">Вакансии</div>\r\n    <div class=\"header__link\">Работадателю</div>\r\n    <div class=\"header__link\">Компании</div>\r\n</div>\r\n<div class=\"header__auth\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"user") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['jobCard/jobCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                 <div class=\"job__badge\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":18,"column":41},"end":{"line":18,"column":49}}}) : helper)))
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"job\" id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"p") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">\r\n    <div class=\"job__favorite\">\r\n        <img src=\"https://img.icons8.com/?size=50&id=87&format=png\" alt=\"Избранное\">\r\n    </div>\r\n    <div class=\"job__avatar\">\r\n        <img src=\"https://placehold.co/100x100/EEE/31343C\" alt=\"Логотип компании\">\r\n    </div>\r\n    <div class=\"job__info\">\r\n        <p class=\"job__name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"p") : depth0)) != null ? lookupProperty(stack1,"profession") : stack1), depth0))
    + "</p>\r\n        <p class=\"job__salary\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"p") : depth0)) != null ? lookupProperty(stack1,"salary") : stack1), depth0))
    + "</p>\r\n        <p class=\"job__company\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"p") : depth0)) != null ? lookupProperty(stack1,"company") : stack1), depth0))
    + "</p>\r\n        <div class=\"job__advantages\">\r\n            <div class=\"job__city\">\r\n                <img src=\"https://img.icons8.com/ios/50/address--v1.png\" alt=\"address--v1\" /> "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"p") : depth0)) != null ? lookupProperty(stack1,"city") : stack1), depth0))
    + "\r\n            </div>\r\n            <div class=\"job__badges\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"p") : depth0)) != null ? lookupProperty(stack1,"badges") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":19,"column":26}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n        <div class=\"job__footer\">\r\n            <div class=\"job__buttons\">\r\n                <div class=\"job__button\">Откликнуться</div>\r\n            </div>\r\n            <div class=\"job__statistics\">\r\n                Создано "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"p") : depth0)) != null ? lookupProperty(stack1,"day_created") : stack1), depth0))
    + " дня назад • "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"p") : depth0)) != null ? lookupProperty(stack1,"count") : stack1), depth0))
    + " уже откликнулись\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['jobCatalog/jobCatalog'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"job_catalog_page\">\r\n    <div class=\"header\">\r\n        \r\n    </div>\r\n    <div class=\"info\">\r\n        <div class=\"info__welcome\"><b>Твоя карьера - наш приоритет</b></div>\r\n        <form class=\"info__search\">\r\n            <input placeholder=\"Профессия, должность или компания\"></input>\r\n            <button class=\"info__button\">Найти</button>\r\n        </form>\r\n        <div class=\"info__footer\">\r\n            Нет резюме? Используй наш <a class=\"info__link\">конструктор</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"job_category\">\r\n        <div class=\"job_category__name\">Специализация</div>\r\n        <div class=\"job_category__slider\">\r\n            <div class=\"job_category__badge\">&#10094;</div>\r\n            <div class=\"job_category__badge\">Информационные технологии</div>\r\n            <div class=\"job_category__badge\">Наука, образование</div>\r\n            <div class=\"job_category__badge\">Туризм, гостиницы</div>\r\n            <div class=\"job_category__badge\">IT-специальности</div>\r\n            <div class=\"job_category__badge\">&#10095;</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"page\">\r\n        <form class=\"filter\">\r\n            <div class=\"filter__name\"><b>Режим работы</b></div>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"work_mode\" value=\"full_time\">\r\n                <span>Полный день</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"work_mode\" value=\"hybrid\">\r\n                <span>Смешанный формат</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"work_mode\" value=\"remote\">\r\n                <span>Удаленная работа</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"work_mode\" value=\"flexible\">\r\n                <span>Гибкий график</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"work_mode\" value=\"shift\">\r\n                <span>Сменный график</span>\r\n            </label>\r\n            <div class=\"filter__name\"><b>Зарплата</b></div>\r\n            <div class=\"filter__input\">\r\n                <label for=\"salary_from\">Зарплата от, руб:</label>\r\n                <input type=\"number\" id=\"salary_from\" name=\"salary_from\" min=\"0\" placeholder=\"Введите сумму\">\r\n            </div>\r\n            <div class=\"filter__name\"><b>Опыт работы</b></div>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"experience\" value=\"no_matter\">\r\n                <span>Не имеет значения</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"experience\" value=\"no_experience\">\r\n                <span>Нет опыта</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"experience\" value=\"1_to_3_years\">\r\n                <span>От 1 года до 3 лет</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"experience\" value=\"4_to_6_years\">\r\n                <span>От 4 до 6 лет</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"experience\" value=\"more_than_6_years\">\r\n                <span>Более 6 лет</span>\r\n            </label>\r\n\r\n            <div class=\"filter__name\"><b>Сортировка</b></div>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"radio\" name=\"sort\" value=\"date\" checked>\r\n                <span>По дате изменения</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"radio\" name=\"sort\" value=\"salary_desc\">\r\n                <span>По убыванию зарплаты</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"radio\" name=\"sort\" value=\"relevance\">\r\n                <span>По соответствию</span>\r\n            </label>\r\n        </form>\r\n        <div class=\"job_list\">\r\n\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['login/login'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form class=\"form\">\r\n            <div class=\"form__back\">&#10094;</div>\r\n			<div id=\"form login password\">\r\n				<div class=\"form__name\">Введите пароль</div>\r\n				<div class=\"form__description\">\r\n					От профиля с почтой\r\n					<div class=\"form__email\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"email","hash":{},"data":data,"loc":{"start":{"line":7,"column":30},"end":{"line":7,"column":39}}}) : helper)))
    + "</div>\r\n				</div>\r\n				<div class=\"form__input\">\r\n					<input type=\"password\" placeholder=\"пароль\" name=\"password\" required>\r\n				</div>\r\n				<label class=\"form__checkbox\">\r\n                    <input type=\"checkbox\" name=\"show_password\">\r\n                    <span>Показать пароль</span>\r\n				</label>\r\n			</div>\r\n            <button type=\"submit\" class=\"form__button\" name=\"submit\">Войти</button>\r\n        </form>";
},"useData":true});
templates['main/main'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"job_catalog_page\">\r\n    <div class=\"info\">\r\n        <div class=\"info__welcome\"><b>Твоя карьера - наш приоритет</b></div>\r\n        <form class=\"info__search\">\r\n            <input placeholder=\"Профессия, должность или компания\"></input>\r\n            <button class=\"info__button\">Найти</button>\r\n        </form>\r\n        <div class=\"info__footer\">\r\n            Нет резюме? Используй наш <a class=\"info__link\">конструктор</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"job_category\">\r\n        <div class=\"job_category__name\">Специализация</div>\r\n        <div class=\"job_category__slider\">\r\n            <div class=\"job_category__badge\">&#10094;</div>\r\n            <div class=\"job_category__badge\">Информационные технологии</div>\r\n            <div class=\"job_category__badge\">Наука, образование</div>\r\n            <div class=\"job_category__badge\">Туризм, гостиницы</div>\r\n            <div class=\"job_category__badge\">IT-специальности</div>\r\n            <div class=\"job_category__badge\">&#10095;</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"page\">\r\n        <form class=\"filter\">\r\n            <div class=\"filter__name\"><b>Режим работы</b></div>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"work_mode\" value=\"full_time\">\r\n                <span>Полный день</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"work_mode\" value=\"hybrid\">\r\n                <span>Смешанный формат</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"work_mode\" value=\"remote\">\r\n                <span>Удаленная работа</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"work_mode\" value=\"flexible\">\r\n                <span>Гибкий график</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"work_mode\" value=\"shift\">\r\n                <span>Сменный график</span>\r\n            </label>\r\n            <div class=\"filter__name\"><b>Зарплата</b></div>\r\n            <div class=\"filter__input\">\r\n                <label for=\"salary_from\">Зарплата от, руб:</label>\r\n                <input type=\"number\" id=\"salary_from\" name=\"salary_from\" min=\"0\" placeholder=\"Введите сумму\">\r\n            </div>\r\n            <div class=\"filter__name\"><b>Опыт работы</b></div>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"experience\" value=\"no_matter\">\r\n                <span>Не имеет значения</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"experience\" value=\"no_experience\">\r\n                <span>Нет опыта</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"experience\" value=\"1_to_3_years\">\r\n                <span>От 1 года до 3 лет</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"experience\" value=\"4_to_6_years\">\r\n                <span>От 4 до 6 лет</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"checkbox\" name=\"experience\" value=\"more_than_6_years\">\r\n                <span>Более 6 лет</span>\r\n            </label>\r\n\r\n            <div class=\"filter__name\"><b>Сортировка</b></div>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"radio\" name=\"sort\" value=\"date\" checked>\r\n                <span>По дате изменения</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"radio\" name=\"sort\" value=\"salary_desc\">\r\n                <span>По убыванию зарплаты</span>\r\n            </label>\r\n            <label class=\"filter__checkbox\">\r\n                <input type=\"radio\" name=\"sort\" value=\"relevance\">\r\n                <span>По соответствию</span>\r\n            </label>\r\n        </form>\r\n    </div>\r\n</div>";
},"useData":true});
templates['registrationCompany/registrationCompany'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"form\" name=\"registration_company\">\r\n    <div class=\"form__back\">&#10094;</div>\r\n        <div class=\"form__name\">О компании</div>\r\n        <div class=\"form__input\">\r\n            <input type=\"text\" placeholder=\"название компании\" name=\"company_name\" minlength=\"2\" required>\r\n            <input type=\"text\" placeholder=\"юридический адрес\" name=\"company_address\" minlength=\"10\" required>\r\n        </div>\r\n        <div class=\"form__error\">\r\n\r\n        </div>\r\n    <button type=\"submit\" class=\"form__button\" name=\"submit\">Зарегистрироваться</button>\r\n</form>";
},"useData":true});
templates['registrationEmail/registrationEmail'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form class=\"form\" name=\"registration_email\">\r\n    <div class=\"form__name\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data,"loc":{"start":{"line":2,"column":28},"end":{"line":2,"column":36}}}) : helper)))
    + "</div>\r\n    <div class=\"form__input\">\r\n        <input type=\"email\" placeholder=\"электронная почта\" name=\"email\" required>\r\n        <div class=\"form__error\">\r\n\r\n        </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"form__button\" name=\"submit\">Дальше</button>\r\n</form>\r\n<div class=\"under_link\" id=\"i_need_job\">Я ищу работу</div>\r\n<div class=\"under_link\" id=\"i_need_users\">Я ищу работников</div>";
},"useData":true});
templates['registrationPassword/registrationPassword'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form class=\"form\" name=\"registration_password\">\r\n    <div class=\"form__back\">&#10094;</div>\r\n    <div id=\"form registration people pass\">\r\n        <div class=\"form__name\">Введите пароль</div>\r\n        <div class=\"form__description\">\r\n            Для профиля с почтой\r\n            <div class=\"form__email\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"mail") || (depth0 != null ? lookupProperty(depth0,"mail") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"mail","hash":{},"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":45}}}) : helper)))
    + "</div>\r\n        </div>\r\n        <div class=\"form__input\">\r\n            <input type=\"password\" placeholder=\"пароль\" name=\"password\" minlength=\"10\" required>\r\n            <input type=\"password\" placeholder=\"повторите пароль\" name=\"repeat_password\" minlength=\"10\" required>\r\n            <div class=\"form__error\">\r\n                \r\n            </div>\r\n        </div>\r\n        <label class=\"form__checkbox\">\r\n            <input type=\"checkbox\" name=\"show_password\">\r\n            <span>Показать пароль</span>\r\n        </label>\r\n    </div>\r\n    <button type=\"submit\" class=\"form__button\" name=\"submit\">Дальше</button>\r\n</form>";
},"useData":true});
templates['registrationUser/registrationUser'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"form\" name=\"registration_user\">\r\n    <div class=\"form__back\">&#10094;</div>\r\n    <div class=\"form__name\">Как вас зовут?</div>\r\n    <div class=\"form__input\">\r\n        <input type=\"text\" placeholder=\"имя\" name=\"first_name\" required>\r\n        <input type=\"text\" placeholder=\"фамилия\" name=\"last_name\" required>\r\n    </div>\r\n    <div class=\"form__error\">\r\n\r\n    </div>\r\n    <button type=\"submit\" class=\"form__button\" name=\"submit\">Регистрация</button>\r\n</form>";
},"useData":true});
})();