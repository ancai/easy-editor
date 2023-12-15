const submitBtn: HTMLDivElement|null = null;
function purchase () {
  if (!submitBtn) {
    console.log('no submit button focused...');
    return;
  }
  const curr = new Date();
  if (curr.getHours() === 20) {
    submitBtn.children[0].click();
  }
  setTimeout(purchase, 0);
}
purchase();