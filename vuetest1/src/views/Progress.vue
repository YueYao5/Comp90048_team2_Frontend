<template>
    <div>
        <h1>Please Select Metrics You Want to Use? </h1>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Select All</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
    const cityOptions = ['Cosine Similarity', 'Canberra Similarity', 'Euclidean Similarity', 'Keselj Similarity','Manhattan Similarity'];
    export default {
        data() {
            return {
                checkAll: false,
                checkedCities: ['Cosine Similarity', 'Canberra Similarity'],
                cities: cityOptions,
                isIndeterminate: true
            };
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        }
    };

</script>

<style scoped>

</style>