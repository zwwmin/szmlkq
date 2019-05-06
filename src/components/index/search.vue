<template>
  <div class="index">
   
    <div class="search_header">
      <div class="search_header_input">
        <div class="search_header_input_n">

    <div class="search_header_input_in">
          <el-autocomplete
            style="height: 100%;width: 100%;"
            v-model="state4"
            :fetch-suggestions="querySearchAsync"
            :trigger-on-focus="false"
            placeholder="查询服务或门诊名称"
            @select="handleSelect"
          ></el-autocomplete>
        </div>
        </div>
    
        <router-link tag="span" to="/" class="search_header_input_cancel">取消</router-link>
      </div>
    
      <!-- 热搜 -->
      <div class="search_hot">
        <div class="search_hot_tit">热搜</div>
        <div class="search_hot_nav">
          <a v-for="i in showSearch" :key="i.index" :href="i.sUrl">{{i.sName}}</a>
          
        </div>
      </div>
      <!-- 大家都在搜(公用模版) -->
      <div class="header_recording">
        <div class="header_recording_ranking">
          <!-- 1个模版 -->
          <a href="http://m.mylikegd.com.cn/html/zt/213.html" class="header_recording_module">
            <div class="recording_module">
              <span>1</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">2018双十一你剁手了啥11111111111</span>
                <span class="recording_module-righr-span2">剁手指南</span>
              </div>
            </div>
          </a>
          <a href="http://m.mylikegd.com.cn/html/zt/213.html" class="header_recording_module">
            <div class="recording_module">
              <span>2</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">美莱最新优惠</span>
                <span class="recording_module-righr-span2">终于可以买买买了！太便宜了！</span>
              </div>
            </div>
          </a>
          <a class="header_recording_module" href="http://m.mylikegd.com.cn/html/zt/213.html">
            <div class="recording_module">
              <span>3</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">洗牙能美白吗</span>
                <span class="recording_module-righr-span2">牙齿美白</span>
              </div>
            </div>
          </a>
          <a href="http://m.mylikegd.com.cn/html/zt/213.html" class="header_recording_module">
            <div class="recording_module">
              <span>4</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">牙齿矫正真的只要12个月吗</span>
                <span class="recording_module-righr-span2">大家都在搜</span>
              </div>
            </div>
          </a>
          <!-- 1个模版 -->
          <a href="http://m.mylikegd.com.cn/html/zt/213.html" class="header_recording_module">
            <div class="recording_module">
              <span>5</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">论牙齿对脸型的影响</span>
                <span class="recording_module-righr-span2">智齿拔不拔！</span>
              </div>
            </div>
          </a>
          <a href="http://m.mylikegd.com.cn/html/zt/213.html" class="header_recording_module">
            <div class="recording_module">
              <span>6</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">牙齿矫正真的只要12个月吗</span>
                <span class="recording_module-righr-span2">大家都在搜</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <!-- 大家都在搜(公用模版) -->
      <div class="header_recording">
        <span class="header_recording_title">历史记录</span>
        <!-- 垃圾桶 -->
        <div class="ashcan" v-on:click="delete_label"></div>
        <div class="header_recording_ranking">
          <a href="http://m.mylikegd.com.cn/html/zt/213.html"
            class="header_recording_ranking_Shelf"
            v-for="index in history_list"
            :key="index.id"
          >{{index.value}}</a>
        </div>
      </div>
    </div>

    <div class="search_footer_mask"></div>
    <!-- <div class="search_footer">
      <div class="search_footer_center">
        <img src="../../assets/img/fujin.png" alt="">
        <span>附近</span>
      </div>
       <div class="search_footer_center">
         <div class="search_footer_center_yuan">
            <img src="../../assets/img/kefu.png" alt="">
        <span>附近</span>
         </div>        
      </div>
      <div class="search_footer_center">
        <img src="../../assets/img/tell.png" alt="">
        <span>发现</span>
      </div>
      <div class="search_footer_center"  v-on:click="delete_label">
        <img src="../../assets/img/fujin.png" alt="">
        <span>朕</span>
      </div>
      
    </div>-->
    <!-- <div style="width:100%;height:30px;">
      <input class="input" type="text" value="1">
      <button v-on:click="Switch">编辑</button>
    </div>
    <div style="width:100%;height:30px;">
      <input class="input" type="text" value="2">
      <button v-on:click="Switch">编辑</button>
    </div>
    <div style="width:100%;height:30px;">
      <input class="input" type="text" value="3">
      <button v-on:click="Switch">编辑</button>
    </div>-->
  </div>
</template>

<style lang='scss'>
@import "../../../static/css/search.scss";
</style>
<script>
export default {
  data() {
    return {
      search: "",
      value1: "",
      data1: [],
      showSearch: [],
      history_list: [
        {
          value: "美白"
        },
        {
          value: "牙齿美白"
        },
        {
          value: "隐适美"
        },
        {
          value: "无痛拔牙"
        },
        {
          value: "矫正牙齿要多久"
        },
        {
          value: "金属托槽矫正多少钱"
        },
        {
          value: "补单颗牙"
        },
        {
          value: "门牙掉了怎么办"
        }
      ],
      restaurants: [],
      state4: "",
      timeout: null
    };
  },
  mounted() {
    let vm = this;
    this.restaurants = this.loadAll();
    this.$api.article
      .showSearch({
        sBelong: "hot_seek"
      })
      .then(res => {
        console.log("热搜");
        console.log(res);
        vm.showSearch = res;
      });
  },
  methods: {
    delete_label() {
      this.history_list=[]
    },
    handleSearch1(value) {
      this.data1 = !value ? [] : [value, value + value, value + value + value];
    },
    Switch(event) {
      console.log(event);
      console.log(event.path[1]);
      console.log(event.path[1].childNodes[0]);
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号"
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层"
        },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺"
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819"
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
        },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
        },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号"
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号"
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部"
        },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室"
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号"
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼"
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
        },{
          value: "牙齿",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    querySearchAsync(queryString, cb) {
      console.log(queryString);
      // var restaurants = this.restaurants;
      // var results = queryString
      //   ? restaurants.filter(this.createStateFilter(queryString))
      //   : restaurants;

      // clearTimeout(this.timeout);
      // this.timeout = setTimeout(() => {
      //   cb(results);
      // }, 3000 * Math.random());
      var restaurants = this.restaurants;
      this.$api.article
        .showSearch({
          sBelong: "top_seek"
        })
        .then(res => {
          // 执行某些操作
          console.log(res);
        });
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      console.log(results);
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        cb(results);
      }, 100 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
      console.log(11111);
    }
  },
  components: {}
};
</script>
