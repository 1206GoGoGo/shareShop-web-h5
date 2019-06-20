<template>
     <div >    
        <div v-for="(item,key) in value">
           <attr-button :tag='item'></attr-button>
        </div>
        
     </div>
</template>

<script>
import attrbutton from '@/components/product/attr-button'

export default {
    data(){
        return{
            
        }
    },
    props:{
        value:{
            type:Array
        },
    },
    components:{
        'attr-button':attrbutton,
        
    },
    
}
</script>

<style lang="less" scoped>

</style>
