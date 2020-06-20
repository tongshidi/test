<template>
    <div class="colors"> first test vue {{a}}</div>
</template>
<script>
export default {
    name: 'Test',
    data:function(){
        a:'test'
    },
    method:{
        a:function(){
            this.$http.get()
        }
    }
}
</script>
<style scoped>
.colors{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: red;
}

</style>
