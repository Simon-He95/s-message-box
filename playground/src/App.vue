<script setup lang="ts">
const show = ref(false)
function change() {
  show.value = !show.value
}
function cancel() {
  change()
}
function confirm() {
  alert('confirm')
  change()
}

const titleForm = reactive({
  title: 'Title',
  width: 300,
  height: 150,
  borderRadius: 10,
  shadow: true,
  titleColor: '',
  borderBottom: true,
  titleFontSize: 18,
  titleLineHeight: 40,
  messageColor: '',
  messageFontSize: 14,
  message: '我是内容',
  cancelText: '取消',
  confirmText: '确认',
  confirmFontSize: 14,
  cancelFontSize: 14,
  cancelColor: '',
  confirmColor: '',
  confirmBorderRadius: 0,
  cancelBorderRadius: 0,
  buttonLineHeight: 32,
  buttonWidth: 75,
  confirmBackgroundColor: '#409eff',
  cancelBackgroundColor: '#ffffff',
  cancelBorderColor: '#e4e7ed',
  confirmBorderColor: '#dcdfe6',
  buttonRadius: 10,
  buttonPosition: 'center',
  messageCenter: false,
  titleCenter: false,
  rules: {
    title: [val => !!val || 'required'],
    message: [val => !!val || 'required'],
  },
})

function exportCode() {
  function replacer(key, value) {
    return typeof value === 'function' ? value.toString() : value
  }
  const content = `
   /* script */

    const show = ref(false);
    const titleForm = ${JSON.stringify(titleForm, replacer)}
    function change() {
      show.value = !show.value;
    }
    function cancel() {
      change();
    }
    function confirm() {
      alert("confirm");
      change();
    }
    /* template */
    
      <s-message-box
        :show="show"
        v-bind="titleForm"
        :close="change"
        :cancel="cancel"
        :confirm="confirm"
      />
  `
  const dom = document.createElement('input')
  dom.value = content
  document.body.appendChild(dom)
  dom.select()
  document.execCommand('copy')
  document.body.removeChild(dom)
  alert('复制成功')
}
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <vivid-typing text-3xl font-bold content="Design a messageBox of your own" />
    <div flex="~ gap-5" justify-center m-y-10>
      <button btn @click="change()">
        show sMessageBox
      </button>
      <button btn @click="exportCode()">
        export code
      </button>
    </div>
    <div whitespace-nowrap m-y-10>
      <VerifyForm :form-data="titleForm">
        <VerifyFormField prop="width" label="弹窗宽度">
          <el-input-number v-model="titleForm.width" />
        </VerifyFormField>
        <VerifyFormField prop="height" label="弹窗高度">
          <el-input-number v-model="titleForm.height" />
        </VerifyFormField>
        <VerifyFormField prop="borderRadius" label="弹窗圆角">
          <el-input-number v-model="titleForm.borderRadius" />
        </VerifyFormField>
        <VerifyFormField prop="borderBottom" label="是否开启遮罩">
          <el-radio-group v-model="titleForm.shadow" class="ml-4">
            <el-radio :label="true" size="large">
              是
            </el-radio>
            <el-radio :label="false" size="large">
              否
            </el-radio>
          </el-radio-group>
        </VerifyFormField>
        <VerifyFormField prop="titleColor" label="标题颜色">
          <el-color-picker v-model="titleForm.titleColor" show-alpha />
        </VerifyFormField>
        <VerifyFormField prop="title" label="标题文字" required>
          <el-input v-model="titleForm.title" />
        </VerifyFormField>
        <VerifyFormField prop="titleFontSize" label="标题大小">
          <el-input-number v-model="titleForm.titleFontSize" />
        </VerifyFormField>
        <VerifyFormField prop="titleFontSize" label="标题行高">
          <el-input-number v-model="titleForm.titleLineHeight" />
        </VerifyFormField>
        <VerifyFormField props="titleCenter" label="标题是否居中">
          <el-radio-group v-model="titleForm.titleCenter" class="ml-4">
            <el-radio :label="true" size="large">
              是
            </el-radio>
            <el-radio :label="false" size="large">
              否
            </el-radio>
          </el-radio-group>
        </VerifyFormField>
        <VerifyFormField prop="borderBottom" label="标题底线">
          <el-radio-group v-model="titleForm.borderBottom" class="ml-4">
            <el-radio :label="true" size="large">
              是
            </el-radio>
            <el-radio :label="false" size="large">
              否
            </el-radio>
          </el-radio-group>
        </VerifyFormField>
        <VerifyFormField props="messageColor" label="内容颜色">
          <el-color-picker v-model="titleForm.messageColor" show-alpha />
        </VerifyFormField>
        <VerifyFormField props="messageCenter" label="内容是否居中">
          <el-radio-group v-model="titleForm.messageCenter" class="ml-4">
            <el-radio :label="true" size="large">
              是
            </el-radio>
            <el-radio :label="false" size="large">
              否
            </el-radio>
          </el-radio-group>
        </VerifyFormField>
        <VerifyFormField props="message" label="内容文字" required>
          <el-input v-model="titleForm.message" />
        </VerifyFormField>
        <VerifyFormField prop="messageFontSize" label="内容大小">
          <el-input-number v-model="titleForm.messageFontSize" />
        </VerifyFormField>
        <VerifyFormField prop="cancelText" label="取消文字">
          <el-input v-model="titleForm.cancelText" />
        </VerifyFormField>
        <VerifyFormField prop="confirmText" label="确认文字">
          <el-input v-model="titleForm.confirmText" />
        </VerifyFormField>
        <VerifyFormField props="confirmBackgroundColor" label="取消按钮背景颜色">
          <el-color-picker v-model="titleForm.cancelBackgroundColor" show-alpha />
        </VerifyFormField>
        <VerifyFormField props="cancelBorderColor" label="取消按钮边框颜色">
          <el-color-picker v-model="titleForm.cancelBorderColor" show-alpha />
        </VerifyFormField>
        <VerifyFormField props="cancelBackgroundColor" label="取消按钮文字颜色">
          <el-color-picker v-model="titleForm.cancelColor" show-alpha />
        </VerifyFormField>
        <VerifyFormField props="confirmBackgroundColor" label="确认按钮背景颜色">
          <el-color-picker v-model="titleForm.confirmBackgroundColor" show-alpha />
        </VerifyFormField>
        <VerifyFormField props="confirmBorderColor" label="确认按钮边框颜色">
          <el-color-picker v-model="titleForm.confirmBorderColor" show-alpha />
        </VerifyFormField>
        <VerifyFormField props="confirmBackgroundColor" label="确认按钮文字颜色">
          <el-color-picker v-model="titleForm.confirmColor" show-alpha />
        </VerifyFormField>
        <VerifyFormField props="buttonLineHeight" label="按钮行高">
          <el-input-number v-model="titleForm.buttonLineHeight" />
        </VerifyFormField>
        <VerifyFormField props="buttonWidth" label="按钮宽度">
          <el-input-number v-model="titleForm.buttonWidth" />
        </VerifyFormField>
        <VerifyFormField props="buttonRadius" label="按钮圆角">
          <el-input-number v-model="titleForm.buttonRadius" />
        </VerifyFormField>
        <VerifyFormField props="buttonPosition" label="按钮位置">
          <el-radio-group v-model="titleForm.buttonPosition" class="ml-4">
            <el-radio label="center" size="large">
              中
            </el-radio>
            <el-radio label="left" size="large">
              左
            </el-radio>
            <el-radio label="right" size="large">
              否
            </el-radio>
          </el-radio-group>
        </VerifyFormField>
      </VerifyForm>
    </div>

    <s-message-box
      :show="show"
      v-bind="titleForm"
      :close="change"
      :cancel="cancel"
      :confirm="confirm"
    />
    <Footer />
  </main>
</template>
