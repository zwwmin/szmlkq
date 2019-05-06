<template>
    <div class="backtop" :style="{right:right + 'px',bottom:bottom + 'px'}" @click="backTop" v-if="showBackTop">
        <div class="icon back"></div>
        <span>顶部</span>
      </div>
</template>
<script>
    export default {
        name: 'back-top',
        data() {
            return {
                showBackTop: false,
                flag: true,
                timer: null,
                scrollTop: 0,
            }
        },
        mounted() {
            window.addEventListener('scroll',() => {
                //var height = document.documentElement.clientHeight || document.body.clientHeight;
                if (this.scrollTop >= this.height) {
                    this.showBackTop = true;
                } else {
                    this.showBackTop = false;
                }
                if (!this.flag) {
                    clearInterval(this.timer);
                }
                this.flag = false;
                this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            })
        },
        props: {
            duration: {
                type: Number,
                default: 30
            },
            spend:{
                type:Number,
                default:10
            },
            height: {
                type: Number,
                default: 200
            },
            right:{
                type:Number,
                default:30
            },
            bottom:{
                type:Number,
                default:60
            }

        },
        methods: {
            backTop() {
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    var now = this.scrollTop;
                    var speed = (0 - now) / this.spend;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if (this.scrollTop == 0) {
                        clearInterval(this.timer);
                    }
                    this.flag = true;
                    document.documentElement.scrollTop = this.scrollTop + speed;
                    document.body.scrollTop = this.scrollTop + speed;
                }, this.duration);
            }
        }
    };
</script>