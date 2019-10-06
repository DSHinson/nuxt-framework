<template>
    <div>
        <h1>Dynamic component Importer</h1>

        <button v-for="(component,i) in modules" v-bind:key="i" v-on:click="btnSelectComponent_Click(component)" class="button--green">{{component.name}}</button>
<component :is='componentInstance'/>
    </div>
</template>
<script src ='./dynamicComponentImporter.js'>
</script>
