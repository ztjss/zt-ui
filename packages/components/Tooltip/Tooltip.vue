<template>
    <div class="tooltip" @mouseenter="tooltipMouseEnter" @mouseleave="tooltipMouseLeave">
        <transition name="base-fade">
            <div ref="tooltipContent" class="tooltip-content" :class="`tooltip-content-${placement}`" :style="themeStyle" v-show="show">
                <div class="tooltip-content-triangle" :class="`tooltip-content-triangle-${placement}`">
                    <div :class="`tooltip-content-triangle-border-${placement}`" v-if="theme == 'light'"></div>
                </div>
                <div class="tooltip-content-text">
                    {{ content }}
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
        <div ref="tirggerObject" class="tooltip-tirgger-object">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZtTooltip',
    props: {
        content: {
            type: [String, Number],
            default: ''
        },
        placement: {
            validator(value) {
                return [
                    'top',
                    'top-start',
                    'top-end',
                    'bottom',
                    'bottom-start',
                    'bottom-end',
                    'left',
                    'left-start',
                    'left-end',
                    'right',
                    'right-start',
                    'right-end'
                ].includes(value)
            },
            default: 'top'
        },
        theme: {
            validator(value) {
                return ['dark', 'light'].includes(value)
            },
            default: 'dark'
        },
        delay: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            show: false,
            timer: null
        }
    },
    computed: {
        themeStyle() {
            return {
                color: this.theme == 'light' ? 'var(--dark)' : 'var(--light)',
                background: this.theme == 'light' ? 'var(--light)' : 'var(--dark)',
                borderColor: this.theme == 'light' ? 'var(--dark)' : ''
            }
        }
    },
    methods: {
        tooltipMouseEnter() {
            if (this.delay > 0) {
                this.timer = setTimeout(() => {
                    this.show = true
                }, this.delay)
            } else {
                this.show = true
            }
        },
        tooltipMouseLeave() {
            this.show = false
            if (this.timer !== null) {
                clearTimeout(this.timer)
                this.timer = null
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
