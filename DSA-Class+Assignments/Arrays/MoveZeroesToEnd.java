public class MoveZeroesToEnd {
    public static void main(String[] args) {
        int[] arr={1,0,8,0,6,0,0};
        int i=0;
        for(int j=1;j<arr.length-1;j++){
            if(arr[j]==0){
                arr[i]=arr[i+1];
                arr[i+1]=0;
            }
        }

        for(int k=0;k<arr.length;k++){
            System.out.print(arr[k]+" ");
        }
    }
}
