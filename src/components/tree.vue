<template>
  <div class="Tree">
    <el-dialog id="editForm"
               title="编辑"
               width="400px"
               :show-close="false"
               :modal="false"
               :visible="true">
      <el-form>
        <el-form-item label="范围"
                      label-width="120px">
          <el-select class="value"
                     name="range"
                     v-model="range"
                     placeholder="请选择拨打范围">
            <el-option v-for="item in rangeOptions"
                       :key="item.value"
                       :label="item.label"
                       :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="机器人"
                      label-width="120px">
          <el-select class="value"
                     name="robot"
                     v-model="robot"
                     placeholder="请选择机器人">
            <el-option v-for="item in robotOptions"
                       :key="item.value"
                       :label="item.label"
                       :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button id="cancel"
                   type="primary"
                   @click="dialogFormVisible = false">取 消</el-button>
        <el-button id="save"
                   type="primary"
                   @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <div id="tree"></div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data() {
    return {
      range: '',
      rangeOptions: [{
        value: '1',
        label: '范围1'
      }, {
        value: '2',
        label: '范围2'
      }, {
        value: '3',
        label: '范围3'
      }],

      robot: '',
      robotOptions: [{
        value: 'A',
        label: '机器人A'
      }, {
        value: 'B',
        label: '机器人B'
      }, {
        value: '3',
        label: '机器人C'
      }],
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      let editForm = function () {
        this.nodeId = null
      }

      editForm.prototype.init = function (obj) {
        let that = this
        this.obj = obj
        this.editForm = document.getElementById("editForm")
        this.rangeInput = document.getElementsByName("range")
        this.robotInput = document.getElementsByName("robot")
        this.cancelButton = document.getElementById("cancel")
        this.saveButton = document.getElementById("save")

        this.cancelButton.addEventListener("click", function () {
          that.hide()
        })
        this.saveButton.addEventListener("click", function () {
          let node = chart.get(that.nodeId)

          node.range = that.rangeInput[0].value
          node.robot = that.robotInput[0].value

          chart.updateNode(node)
          that.hide()
        })

      }

      editForm.prototype.show = function (nodeId) {
        let that = this
        this.nodeId = nodeId
        this.editForm.style.display = "block"
        let node = chart.get(nodeId)

        this.rangeInput[0].value = node.range
        this.robotInput[0].value = node.robot
      }

      editForm.prototype.hide = function (showldUpdateTheNode) {
        this.editForm.style.display = "none"
      }

      var chart = new OrgChart(document.getElementById("tree"), {
        enableSearch: false,
        mouseScrool: OrgChart.action.none,
        nodeMenu: {
          edit: { text: "编辑" },
          add: { text: "添加" },
          remove: { text: "删除" }
        },
        editUI: new editForm(),
        nodeBinding: {
          field_0: "range",
          field_1: "robot"
        },
        nodes: [
          { id: 1, range: "范围2", robot: "机器人A" },
          { id: 2, pid: 1, range: "范围3", robot: "机器人B" },
          { id: 3, pid: 1, range: "范围1", robot: "机器人C" }
        ]
      })
    },
  }
}

</script>

<style lang="stylus">
.Tree {
  #editForm {
    display: none
    .el-dialog__header {
      background: #039be5
      padding: 15px 20px
    }
    .el-dialog__body {
      padding: 15px 20px 0 20px
    }
    .dialog-footer {
      button {
        width: 100px
      }
    }
  }

  #tree {
    width: 100%
    height: 900px !important
    position: relative
  }
}
</style>