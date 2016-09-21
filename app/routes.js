// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';


const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  return [
  {
      path: '/',
      name: 'ProjectList',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Projectlist/reducer'),
          System.import('containers/ProjectList'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer,component]) => {
          injectReducer('projectlist', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '/projectoverview',
      name: 'projectoverview',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Projectoverview/reducer'),
          System.import('containers/ProjectOverview'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer,component]) => {
          injectReducer('project', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/boundarypartners',
      name: 'boundarypartners',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/BoundaryPartners'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/progressmarkers',
      name: 'progressmarkers',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ProgressMarkers'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },{
      path: '/boundarypartnersoverivew',
      name: 'boundarypartnersoverivew',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/boundarypartnersoverivew'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },{
      path: '/externalresources',
      name: 'externalresources',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ExternalResources'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },{
      path: '/pathwayofchange',
      name: 'pathwayofchange',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/PathwayOfChange'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },{
      path: '/completedforms',
      name: 'completedforms',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/completedforms'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },{
      path: '/draftforms',
      name: 'draftforms',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/DraftForms'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },{
      path: '/significantinstancereport',
      name: 'significantinstancereport',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SignificantInstanceReport'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });
        importModules.catch(errorLoading);
      },
    },{
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });
        importModules.catch(errorLoading);
      },
    },{
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
