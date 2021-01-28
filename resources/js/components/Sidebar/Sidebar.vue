<template>
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidebar-main">
        <b-container fluid>
            <a class="navbar-brand pb-0" href="/dashboard">
                <h4 class="navbar-brand-img">Prueba</h4>
            </a>
            <slot name="mobile-right"></slot>
            <slot></slot>
            <div class="navbar-collapse collapse show" id="sidebar-collapse-main" v-show="$sidebar.showSidebar">
                <div class="navbar-collapse-header d-md-none">
                    <b-row>
                        <b-col md="6" class="collapse-brand">
                            <router-link to="/dashboard"><h1>Prueba</h1></router-link>
                        </b-col>
                    </b-row>
                </div>
                <hr class="my-3">
                <ul class="navbar-nav">
                    <slot name="links"></slot>
                </ul>
            </div>
        </b-container>
    </nav>
</template>