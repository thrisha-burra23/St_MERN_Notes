class RemoveDuplicatesFromSortedArray{
    public static void main(String[] args) {
        int[] arr={10,10,10,10,20,20,30,40,40,40};
        int i=0;
        for(int j=0;j<arr.length;j++ ){
            if(arr[i]!=arr[j]){
                i++;
                arr[i]=arr[j];
            }
        }
        for(int k=0;k<=i;k++){
            System.out.print(arr[k]+" ");
        }
    }
}