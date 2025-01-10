<script setup>
import { ref } from 'vue'
const images = ref([]);
const hitCount = ref(0);
const isHit = ref(false);
const liImageClass = ref('liImageClass');
const woodenFishImage = ref('https://img1.baidu.com/it/u=2789072492,3212934856&fm=253&app=120&size=w931&n=0&f=GIF&fmt=auto?sec=1736355600&t=70c66a1fea960cb28ff7ccbacd5645e8');
const loadLargeModule = async () => {
	  const { default: axios } = await import('axios');
	  // 使用 
	  try {
	    const response = await axios.get('https://picsum.photos/v2/list');
	    images.value = response.data;
	  } catch (error) {
	    console.error('获取图片列表失败', error);
	  }
	};

const a = loadLargeModule()
	
const hitWoodenFish = () => {
      hitCount.value++;
      isHit.value = true;
      setTimeout(() => {
        isHit.value = false;
      }, 500); 
      console.log("木鱼被敲了！");
    };

</script>

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