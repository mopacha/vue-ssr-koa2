<template>
  <div class="Tree">
    <el-dialog id="editForm"
               title="编辑"
               width="400px"
               :show-close="false"
               :modal="false"
               :visible="true">
      <el-form>
        <el-form-item label="拨打编号"
                      label-width="120px">
          <el-input v-model="version"
                    name="version"
                    :disabled="true">
          </el-input>
        </el-form-item>
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
      version: '',
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
      treeData: [
        { id: 1, version: '1', range: "范围2", robot: "机器人A" },
        { id: 2, pid: 1, version: '2.1', range: "范围3", robot: "机器人B" },
        { id: 3, pid: 1, version: '2.2', range: "范围1", robot: "机器人C" }
      ]
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    alertMessage() {
      this.$alert('请先删除子节点', '提示', {
        confirmButtonText: '确定',
        type: 'warning',
        callback: action => {
        }
      });
    },
    initChart() {

      const _vthis = this
      let editForm = function () {
        this.nodeId = null
      }

      editForm.prototype.init = function (obj) {
        let that = this
        this.obj = obj
        this.editForm = document.getElementById("editForm")
        this.rangeInput = document.getElementsByName("range")
        this.robotInput = document.getElementsByName("robot")
        this.versionInput = document.getElementsByName("version")
        this.cancelButton = document.getElementById("cancel")
        this.saveButton = document.getElementById("save")

        this.cancelButton.addEventListener("click", function () {
          that.hide()
        })
        this.saveButton.addEventListener("click", function () {
          let node = chart.get(that.nodeId)

          node.range = that.rangeInput[0].value
          node.robot = that.robotInput[0].value
          node.version = that.versionInput[0].value

          console.log(node)
          chart.updateNode(node)

          //整个树的数据结构
          console.log('整个树的数据结构')
          console.log(obj.config.nodes)

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
        this.versionInput[0].value = node.version
      }

      editForm.prototype.hide = function (showldUpdateTheNode) {
        this.editForm.style.display = "none"
      }


      OrgChart.templates.ana.field_0 = '<text class="field_0"  style="font-size: 16px;" fill="#ffffff" x="125" y="30" text-anchor="middle">拨打编号：{val}</text>';
      OrgChart.templates.ana.field_1 = '<text class="field_1"  style="font-size: 16px;" fill="#ffffff" x="125" y="60" text-anchor="middle">拨打范围：{val}</text>';
      OrgChart.templates.ana.field_2 = '<text class="field_2"  style="font-size: 16px;" fill="#ffffff" x="125" y="90" text-anchor="middle">机器人：{val}</text>';
      var chart = new OrgChart(document.getElementById("tree"), {
        template: 'ana',
        mouseScrool: OrgChart.action.zoom,
        enableSearch: false,
        nodeMenu: {
          edit: { text: "编辑" },
          add: { text: "添加" },
          remove: { text: "删除" }
        },
        editUI: new editForm(),
        nodeBinding: {
          field_0: "version",
          field_1: "range",
          field_2: "robot"
        },
        nodes: this.treeData
      })


      chart.on('add', function (sender, node) {
        const parentId = node.pid
        //遍历寻找父节点version
        let parentVersion = ''
        chart.config.nodes.map(i => {
          if (i.id == parentId) {
            parentVersion = i.version
            return
          }
        })
        // 父节点有几个孩子
        let num = 1
        chart.config.nodes.map(i => {
          if (i.pid == parentId) {
            num++
            return
          }
        })
        node.version = parentVersion + '.' + num
        return true
      })

      chart.on('remove', function (sender, nodeId) {
        let canRemove = true
        chart.config.nodes.some(item => {
          if (item.pid == nodeId) {
            _vthis.alertMessage()
            canRemove = false
            return
          }
        })
        return canRemove
      });
    },
  }
}

</script>

<style lang="stylus">
.Tree {
  #editForm {
    display: none;

    .el-dialog__header {
      background: #039be5;
      padding: 15px 20px;
    }

    .el-dialog__body {
      padding: 15px 20px 0 20px;
    }

    .dialog-footer {
      button {
        width: 100px;
      }
    }
  }

  #tree {
    width: 100%;
    height: 700px !important;
    position: relative;
  }
}
</style>