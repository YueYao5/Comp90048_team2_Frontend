<template>
  <div>
    <h1>User Guide</h1>
    <p style="text-align: justify-all">Welcome to our website. This is the testing platform for the research project of Authorship Verification conducted at the University of Melbourne.
      <br>
      <br style="font-family: 'Times New Roman'">By using this website, the user can test whether a specific text is written by an author by comparing with the known files written by the author applying the existing algorithm.
      <br>
      <br>Want to try out yourself? Follow these few steps below, you can test your own files and see the output within a just few minutes!!
      <br>
      <br>Step1:
      <br>You can register as a user by inputting your Email information and set up your password. You can always login this website using this account.
      <br>
      <br>Step2:
      <br>Click on “Try out Model” section of the menu on the left side. In this section, you can upload the known files and unknown files from your local computer. Also, you can choose the n-gram value as you like. Then after these steps are all done, you can click on the “Run” button and then you can see the output directly on the screen like this.
      <br>
      <br>Step3:
      <br>If you already login to the website, you can see all the results of your previous tests like this. Pretty easily and quickly, isn’t it?
      <br>
      <br>Sounds super easy, right? Now it is time for you to try it yourself.
    </p>

  </div>

</template>

<script>
  export default {
    name: "Home",
    data(){
      return{

      }

    }
  }

</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;

    font-family: "Times New Roman";
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
