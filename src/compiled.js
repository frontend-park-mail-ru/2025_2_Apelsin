(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['auth/auth'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"auth\">\r\n\r\n</div>";
},"useData":true});
templates['registrationEmail/registrationEmail'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form class=\"form\" name=\"registration_email\">\r\n    <div class=\"form__back\">&#10094;</div>\r\n    <div class=\"form__name\"><b>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":39}}}) : helper)))
    + "</b></div>\r\n    <div class=\"form__input\">\r\n        <input type=\"email\" placeholder=\"электронная почта\" name=\"email\" required>\r\n        <div class=\"form__error\">\r\n\r\n        </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"form__button\" name=\"submit\"><b>Дальше</b></button>\r\n</form>\r\n<a href=\"#\" class=\"under_link\" id=\"i_need_job\">Я ищу работу</a>\r\n<a href=\"#\" class=\"under_link\" id=\"i_need_users\">Я ищу работников</a>";
},"useData":true});
})();