RemoveTableRow = function(handler) {
    var tr = $(handler).closest('tr');
    tr.fadeOut(400, function() {
      tr.remove();
    });
    return false;
  };
  
  AddTableRow = function() {
  
    var newRow = $("<tr>");
    var cols = "";
  
    cols += '<td class="col-md-4"><input type="text" class="form-control product" name="item[]"></td>';
    cols += '<td class="col-md-4"><input type="text" class="form-control product" name="product[]"></td>';
    cols += '<td class="col-md-2"><input type="text" class="form-control amount" name="amount[]"></td>';
    cols += '<td class="col-md-2"><input type="text" class="form-control price" name="price[]"></td>';
    cols += '<td class="col-md-2 total">R$ 0,00</td>';
    cols += '<td class="col-md-2">';
    cols += '<a onclick="RemoveTableRow(this)" type="button"><i class="zmdi zmdi-delete zmdi-hc-lg"></i></a>';
    cols += '</td>';
  
    newRow.append(cols);
    $("#products-table").append(newRow);
  
    $(".amount, .price").unbind('blur keyup');
    $(".amount, .price").on("blur keyup",function(){
      const tr = $(this).parent().parent();
  
      const quant = parseInt(tr.find('.amount').val());
      const valor = parseInt(tr.find('.price').val());
      
      if (!isNaN(quant) && !isNaN(valor)){
        tr.find('.total').html("R$ " + (quant * valor));
      }
    });
  
    return false;
  };