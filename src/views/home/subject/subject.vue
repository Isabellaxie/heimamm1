<template>
  <div class="subject">
    <el-card>
      <el-form :model="form" :inline="true" label-width="80px">
        <el-form-item label="学科编号" prop="rid">
          <el-input v-model="form.rid" class="setWidth"></el-input>
        </el-form-item>
        <el-form-item label="学科名称" prop="name">
          <el-input v-model="form.name" class="setWidth"></el-input>
        </el-form-item>
        <el-form-item label="创建者" prop="username">
          <el-input v-model="form.username" class="setWidth"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="form.status" class="setWidth">
            <el-option label="启用" value="1"></el-option>
            <el-option label="禁用" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
          <el-button>清除</el-button>
          <el-button type="primary">+新增学科</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 第二张卡片 -->
    <el-card>
      <el-table :data="dataInfo">
        <el-table-column label="序号">
          <template> </template>
        </el-table-column>
        <el-table-column label="学科编号"></el-table-column>
        <el-table-column label="学科名称"></el-table-column>
        <el-table-column label="简称"></el-table-column>
        <el-table-column label="创建者"></el-table-column>
        <el-table-column label="创建日期"></el-table-column>
        <el-table-column label="状态">
          <template> </template>
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button type="primary">编辑</el-button>
            <el-button type="primary">清除</el-button>
            <el-button type="primary">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
      class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-sizes="[3, 5, 10, 15]"
        :page-size="pagination.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        rid: "",
        name: "",
        username: "",
        status: "",
      },
      dataInfo: "",
      pagination:{
        currentPage:1,
        total:4,
        size:3
      }
    };
  },

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="less">
.subject {
  .el-card.is-always-shadow {
    margin-bottom: 30px;
  }
  .setWidth {
    width: 150px;
  }
}
</style>
