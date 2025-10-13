public class MoveZeroesToFront {
    public static void main(String[] args) {
        int[] arr = { 1, 0, 8, 0, 6, 0, 0 };
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] == 0) {
                arr[i] = arr[i + 1];
                arr[i + 1] = 0;
            }
        }

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
