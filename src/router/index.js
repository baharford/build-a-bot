import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import BrowseHeads from '../parts/RobotHeads.vue';
import BrowseArms from '../parts/RobotArms.vue';
import BrowseTorsos from '../parts/RobotTorsos.vue';
import BrowseBases from '../parts/RobotBases.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: BrowseHeads,
      },
      {
        name: 'BrowseArms',
        path: 'arms',
        component: BrowseArms,
      },
      {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: BrowseTorsos,
      },
      {
        name: 'BrowseBases',
        path: 'bases',
        component: BrowseBases,
      },
    ],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
  }],
});
