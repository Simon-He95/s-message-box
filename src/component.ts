// @unocss-include
import { defineComponent, h } from 'vue'

function addStyle() {
  const style = document.createElement('style')
  style.innerHTML = `
  .s-messageBox{
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
    z-index: 9999;
    align-items: center;
    justify-content: center;
  }
  .s-messageBox-container{
    display: flex;
    flex-direction: column;
    border:1px solid #ccc;
    overflow: hidden;
    padding-bottom:10px;
  }
  .s-messageBox-title{
    position:relative;
    padding:0 15px;
    display:flex;
    align-items: center;
  }
  .s-messageBox-message{
    height: 100%;
    display: flex;
    padding:10px 15px;
  }
  .s-messageBox-close:hover{
    cursor: pointer;
  }
  `
  document.querySelector('head')?.appendChild(style)
}
addStyle()
export const sMessageBox = defineComponent({
  props: {
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 200,
    },
    title: {
      type: String,
      default: 'Title',
    },
    borderColor: {
      type: String,
      default: '#ebeef5',
    },
    borderBottom: {
      type: Boolean,
      default: true,
    },
    titleFontSize: {
      type: Number,
      default: 20,
    },
    titleColor: {
      type: String,
      default: '#fff',
    },
    titleLineHeight: {
      type: Number,
      default: 40,
    },
    message: {
      type: String,
      default: 'This is an alert message.',
    },
    messageFontSize: {
      type: Number,
      default: 16,
    },
    messageColor: {
      type: String,
      default: '#fff',
    },
    borderRadius: {
      type: Number,
      default: 10,
    },
    shadow: {
      type: Boolean,
      default: true,
    },
    background: {
      type: String,
      default: '#fff',
    },
    show: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Function,
      default: () => { },
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
    cancelColor: {
      type: String,
      default: '#fff',
    },
    cancelBackgroundColor: {
      type: String,
      default: '#ebeef5',
    },
    cancelFontSize: {
      type: Number,
      default: 16,
    },
    buttonLineHeight: {
      type: Number,
      default: 40,
    },
    buttonWidth: {
      type: Number,
      default: 40,
    },
    buttonRadius: {
      type: Number,
      default: 10,
    },
    cancelBorderColor: {
      type: String,
      default: '#ebeef5',
    },
    confirmText: {
      type: String,
      default: 'Confirm',
    },
    confirmColor: {
      type: String,
      default: '#fff',
    },
    confirmBackgroundColor: {
      type: String,
      default: '#ebeef5',
    },
    confirmFontSize: {
      type: Number,
      default: 16,
    },
    confirmBorderColor: {
      type: String,
      default: '#ebeef5',
    },
    buttonPosition: {
      type: String,
      default: 'center',
    },
    confirm: {
      type: Function,
      default: () => { },
    },
    titleCenter: {
      type: Boolean,
      default: false,
    },
    messageCenter: {
      type: Boolean,
      default: false,
    },
    cancel: {
      type: Function,
      default: () => { },
    },
  },
  setup(props) {
    return () => h('div', {
      class: 's-messageBox',
      style: {
        backgroundColor: props.shadow ? 'rgba(0,0,0,0.5)' : 'transparent',
        display: props.show
          ? 'flex'
          : 'none',
      },
      onClick: (e: Event) => props.close(e),
    },
    h('div', {
      class: 's-messageBox-container',
      style: {
        width: `${props.width}px`,
        height: `${props.height}px`,
        borderRadius: `${props.borderRadius}px`,
        border: `1px solid ${props.borderColor}`,
        background: props.background,
      },
      onClick: (e: Event) => {
        e.stopPropagation()
      },
    },
    [
      h('div', {
        class: 's-messageBox-title',
        style: {
          fontSize: `${props.titleFontSize}px`,
          textAlign: 'left',
          lineHeight: `${props.titleLineHeight}px`,
          borderBottom: props.borderBottom
            ? `1px solid ${props.borderColor}`
            : '',
        },

      }, [h('div', { style: { color: props.titleColor, textAlign: props.titleCenter ? 'center' : 'left', width: '100%' } }, props.title), h('span', { class: 'i-carbon:close s-messageBox-close', style: { position: 'absolute', right: '15px' }, onClick: (e: Event) => props.close(e) })]),
      h('div', {
        class: 's-messageBox-message',
        style: {
          color: props.messageColor,
          fontSize: `${props.messageFontSize}px`,
          justifyContent: props.messageCenter ? 'center' : 'flex-start',
          alignItems: props.messageCenter ? 'center' : 'flex-start',
        },
      }, props.message),
      h('div', {
        class: 's-messageBox-button',
        style: {
          display: 'flex',
          justifyContent: props.buttonPosition === 'center' ? 'center' : props.buttonPosition === 'left' ? 'flex-start' : 'flex-end',
          padding: '0 15px',
        },
      }, [
        h('button', {
          class: 's-messageBox-cancel',
          style: {
            color: props.cancelColor,
            background: props.cancelBackgroundColor,
            fontSize: `${props.cancelFontSize}px`,
            lineHeight: `${props.buttonLineHeight}px`,
            borderRadius: `${props.buttonRadius}px`,
            border: `1px solid ${props.cancelBorderColor}`,
            width: `${props.buttonWidth}px`,
            textAlign: 'center',
            marginRight: '10px',
            cursor: 'pointer',
          },
          onClick: (e: Event) => props.cancel(e),
        }, props.cancelText),
        h('button', {
          class: 's-messageBox-confirm',
          style: {
            color: props.confirmColor,
            background: props.confirmBackgroundColor,
            fontSize: `${props.confirmFontSize}px`,
            lineHeight: `${props.buttonLineHeight}px`,
            borderRadius: `${props.buttonRadius}px`,
            border: `1px solid ${props.confirmBorderColor}`,
            width: `${props.buttonWidth}px`,
            textAlign: 'center',
            cursor: 'pointer',
          },
          onClick: (e: Event) => props.confirm(e),
        }, props.confirmText),
      ]),
    ]))
  },
})
