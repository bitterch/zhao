<template>
  <div class="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-col :span="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              unique-opened
              router
            >
              <div v-for="(v, i) in menu" :key="i">
                <el-menu-item :index="v.path" v-if="!v.children">{{
                  v.title
                }}</el-menu-item>
                <el-submenu :index="String(i)" v-else>
                  <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span>{{ v.title }}</span>
                  </template>
                  <el-menu-item-group v-for="(x, y) in v.children" :key="y">
                    <el-menu-item :index="x.path" v-if="!x.children">{{
                      x.title
                    }}</el-menu-item>
                    <el-submenu :index="x.path" v-else>
                      <template slot="title">
                        <span>{{ x.title }}</span>
                      </template>
                      <el-menu-item
                        v-for="(a, b) in x.children"
                        :index="a.path"
                        :key="b"
                        >{{ a.title }}</el-menu-item
                      >
                    </el-submenu>
                  </el-menu-item-group>
                </el-submenu>
              </div>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      menu: [],
    };
  },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
  created() {
    this.menu = JSON.parse(localStorage.getItem("menus"));
    console.log(this.menu);
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
}
</style>