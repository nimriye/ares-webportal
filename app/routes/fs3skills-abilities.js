import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import DefaultRoute from 'ares-webportal/mixins/default-route';

export default Route.extend(DefaultRoute, {
    gameApi: service(),
    titleToken: "Abilities",
    
    model: function() {
        let api = this.get('gameApi');
        return api.requestOne('abilities');
    }
});
