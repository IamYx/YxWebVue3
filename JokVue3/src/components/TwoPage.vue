<template>
  <div>
    <button @click="hitWoodenFish">+1</button>
    <p>good luck: {{ hitCount }}</p>
    <img :src="woodenFishImage" @click="hitWoodenFish" :class="isHit? 'hit-animation' : ''" />
  </div>
  <div>
    <ul>
      <li v-for="image in images" :key="image.id">
        <img :src="image.download_url" :alt="image.author" :class="liImageClass" />
        <p>{{ image.author }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

const loadLargeModule = async () => {
  const { default: axios } = await import('axios');
  // 使用 largeModule
};

export default {
  data() {
    return {
      images: [],
      hitCount: 0,
      isHit: false,
	  liImageClass: 'liImageClass',
      woodenFishImage: 'https://img1.baidu.com/it/u=2789072492,3212934856&fm=253&app=120&size=w931&n=0&f=GIF&fmt=auto?sec=1736355600&t=70c66a1fea960cb28ff7ccbacd5645e8' 
    };
  },
  async created() {
    try {
      const response = await axios.get('https://picsum.photos/v2/list');
      this.images = response.data;
    } catch (error) {
      console.error('获取图片列表失败', error);
    }
  },
  methods: {
    hitWoodenFish() {
      this.hitCount++;
      this.isHit = true;
      setTimeout(() => {
        this.isHit = false;
      }, 500); 
      console.log("木鱼被敲了！");
    }
  }
};
</script>

<style>
.liImageClass {
  width: 100px;
  height: 100px;
  border-radius: 20px;
}	

.hit-animation {
  animation: hit 0.5s; 
}

@keyframes hit {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>