function rowWithMax1s(mat,m,n) {
    let max_row_index;
    let max_count = 0;
    
    for(let i=0;i<m;i++){
        let count = 0;
        for (let j=0;j<n;j++){
            if (mat[i][j] == 1){
                count += 1;
            }
        }
        let present_count = count;
        
        if(present_count > max_count){
            max_count = present_count;
            max_row_index = i;
        }
    }
    
    return max_row_index;
}

let matrix = [[0, 1, 1, 1],[0, 0, 1, 1], [0, 0, 0, 1], [0, 0, 0, 0]];
rows = matrix.length;
columns = matrix[0].length;

console.log(rowWithMax1s(matrix,rows,columns));