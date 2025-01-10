<script setup>
import { ref } from 'vue'
defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <input type="text" v-model="inputValue0" placeholder="login" />
  <button type="button" @click="loginAction">login</button>
  <p>
    Welcome:
    <a href="https://www.baidu.com/" target="_blank">{{currUser}}</a>
  </p>

  <button @click="goToNextPage">go to next page</button>
  <div>
    <p>{{ joke }}</p>
  </div>
  <button type="button" @click="changeJoke">count is: {{ clickCount }}</button>
  <input type="text" v-model="inputValue1" placeholder="send to" />
  <button type="button" @click="sendJoke">sendJoke</button>
  
  <ul class="left-aligned-list">
      <li v-for="item in jokes" :key="item" @click="handleClick(item)">{{ item }}</li>
  </ul>
  
  <div v-if="dialogVisible" class="dialog">
      <div class="dialog-content">
        <p>发送成功！</p>
      </div>
  </div>
  
</template>

<style scoped>
a {
  color: #42b983;
}

li {
  padding-top: 10px;
  padding-bottom: 10px;
}

.left-aligned-list {
  text-align: left;
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background-color: white;
  padding: 10px;
  width: 180px;
  border-radius: 10px;
}
</style>

<script>
	import NIM, { V2NIM, V2NIMMessageCreator, V2NIMSendMessageResult } from 'nim-web-sdk-ng';
      export default {
		  
		async mounted() {
			
			const nim = NIM.getInstance({
			    appkey: "4727023efa991d31d61b3b32e819bd5b",
			    debugLevel: "debug",
			    apiVersion: "v2"
			})
			
			nim.V2NIMLoginService.on('onConnectStatus', function (status) {
				console.log('=== onConnectStatus' + status)
			});
			
			
		},
		setup() {
			const inputValue0 = ref('');
			const inputValue1 = ref('');
			return {
				inputValue0,
				inputValue1
			};
		},
		data() {
		    const joke = ref('');
		    const jokes = ref([]);
		    const englishJoke = ref('');
		    const clickCount = ref(0);
		    const currUser = ref('');
		    const dialogVisible = ref(false);
		
		    const handleClick = (item) => {
		      console.log(`点击了: ${item}`);
		      joke.value = item;
		    };
		
		    const showDialog = () => {
		      dialogVisible.value = true;
		      setTimeout(() => {
		        dialogVisible.value = false;
		      }, 3000);
		    };
		
		    return {
		      joke,
		      jokes,
		      englishJoke,
		      clickCount,
		      currUser,
		      dialogVisible,
		      handleClick,
		      showDialog
		    };
		},
        methods: {
		  goToNextPage() {
			this.$router.push('/TwoPage');
		  },
          async changeJoke() {
            try {
              const response = await fetch('https://v2.jokeapi.dev/joke/Any');
              const data = await response.json();
              if (data.error) {
                console.error('获取笑话数据出错:', data.error);
              } else {
                this.joke = data.joke || `${data.setup}  ${data.delivery}`;
				this.jokes.push(`【${this.jokes.length}】` + this.joke);
				this.clickCount++;
              }
            } catch (error) {
              console.error('获取笑话数据出错:', error);
            }
          },
		  async getNimCurrUser() {
			  const user = await NIM.getInstance().V2NIMUserService.getUserList(['ceshi8']);
			  this.currUser = user[0].name;
		  },
		  async loginAction() {
			  try {
			    await NIM.getInstance().V2NIMLoginService.login(this.inputValue0, "123456", {
			      "forceMode": false
			    });
			    
			    this.getNimCurrUser();
				this.changeJoke();
			  } catch (err) {
			    console.log('===0' + err)
			  }
		  },
		  async sendJoke() {
			  try {
			      const message = NIM.getInstance().V2NIMMessageCreator.createTextMessage(this.joke);
				  message.serverExtension = 'abc';
				  const coversationId = NIM.getInstance().V2NIMConversationIdUtil.p2pConversationId(this.inputValue1);
				  console.log('=== 发送1')
				  let res = await NIM.getInstance().V2NIMMessageService.sendMessage(message, coversationId);
				  if (res.message.sendingState == 1) {
					  this.showDialog()
				  } else {
					  console.log('=== 发送失败')
				  }
			  } catch(err) {
			      // todo error
				  console.log('===' + err)
			  }
		  }
        }
      };
</script>
