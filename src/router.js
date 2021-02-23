import Vue from 'vue';
import Router from 'vue-router';
import Home from "./views/Home.vue";
import About from "./views/About.vue";
// import Work from "./views/Work.vue";
import Skill from "./views/Skill.vue";
import SkillA from "./views/SkillA.vue";
import SkillB from "./views/SkillB.vue";
import SkillC from "./views/SkillC.vue";
import Comment from "./views/Comment.vue";

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        // {
        //     path: '/work',
        //     component: Work

        // },
        {
            path: '/skill',
            component: Skill,
            props: true,
            children: [
                { path: "a", component: SkillA },
                { path: "b", component: SkillB },
                { path: "c", component: SkillC },
            ]
        },
        {
            path: '/comment',
            component: Comment
        },
        {
            path: '*',
            redirect: "/"
        }
    ]
})