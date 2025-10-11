
import java.util.Scanner;
class LargestNumber{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter n number");
        int n=sc.nextInt();
        int max=Integer.MIN_VALUE;
        // int arr[]=new int[n];
        System.out.println("Enter the numbers:");
        // for(int i=0;i<n;i++){
        //     arr[i]=sc.nextInt();
        // }
        // for(int i=0;i<arr.length;i++){
        //     if(arr[i]>max)
        //     max=arr[i];
        // }

        for(int i=0;i<n;i++){
            int val=sc.nextInt();
            if(val>max){
                max=val;
            }
        }


        System.out.println("The largest number is "+max);

        sc.close();
    }
}