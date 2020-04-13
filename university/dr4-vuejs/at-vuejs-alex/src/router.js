import VueRouter from 'vue-router';
import Home from "./components/Home.vue";
import Create from "./components/Create.vue";
import Details from "./components/Details.vue";


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
            
		},
		{
            path: '',
            redirect: '/home',            
		},
		{
            path: '*',
            redirect: '/home',            
		},
		{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/create',
            name: 'create',
            component: Create
		},
		{
            path: '/product/:id',
            name: 'product',
			component: Details,
			props: true			
        },
        // {
        //     path: '/filme/:id',
        //     name: 'filme',
        //     component: Filme,
        //     children: [
        //         {
        //             path: 'edit',
        //             name: 'editar-filme',
        //             component: EditarFilme
        //         }
        //     ]
        // },
    ]
});