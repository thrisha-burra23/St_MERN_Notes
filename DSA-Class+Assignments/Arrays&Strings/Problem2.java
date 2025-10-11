import java.util.Scanner;

class Problem2{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter some value:");
        int n=sc.nextInt();
        int arr[]=new int[n];
        for(int i=0;i<n;i++){  
            System.out.println("Enter the value at arr["+i+"]");
            arr[i]=sc.nextInt();
        }

        System.out.println("content of the array ");
        for(int i=0;i<arr.length;i++){
            System.out.println("Value at arr["+i+"]="+arr[i]);
        }
        
        sc.close();

    }
}

 