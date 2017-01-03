import View from '../View';
import HeaderUserView from './HeaderUserView';
import HeaderImageView from './HeaderImageView';
import router from '../../router';
import events from '../../events';

import headerTemplate from '../../templates/layout/header.pug';
import '../../stylesheets/layout/header.styl';

var HeaderView = View.extend({
    events: {
        'click .g-app-title': function () {
            router.navigate('', {trigger: true});
        }
    },

    initialize() {
        this.listenTo(events, 'h:imageOpened', this._setImageText);
        return View.prototype.initialize.apply(this, arguments);
    },

    render() {
        this.$el.html(headerTemplate());

        this.$('a[title]').tooltip({
            placement: 'bottom',
            delay: {show: 300}
        });

        new HeaderUserView({
            el: this.$('.h-current-user-wrapper'),
            parentView: this
        }).render();

        new HeaderImageView({
            el: this.$('.h-image-menu-wrapper'),
            parentView: this
        }).render();

        return this;
    },

    _setImageText(img) {
        console.log(img);
    }
});

export default HeaderView;