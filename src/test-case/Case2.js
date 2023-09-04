function Case2(arr, num) {
    if (num > arr.length) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    // Menghitung jumlah pertama dari subarray awal
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    // Melakukan iterasi melalui array sambil menggeser jendela (sliding window)
    for (let i = num; i < arr.length; i++) {
        // Menambahkan angka baru dari kanan sambil mengurangkan angka yang keluar dari kiri jendela
        tempSum = tempSum - arr[i - num] + arr[i];
        // Memperbarui nilai maksimum jika ditemukan subarray yang lebih besar
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

export default Case2
