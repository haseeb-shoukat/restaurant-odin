(()=>{"use strict";const e=function(e,t){let n=e[0],l=e[1],c=e[2],d=document.createElement(n);return null!=l&&(l=l.split(" "),l.forEach((e=>{d.classList.add(e)}))),null!=c&&(d.textContent=c),null!=t&&t.forEach((e=>{d.appendChild(e)})),console.log(d),d},t=document.querySelector("#content"),n=[e(["div","nav-item selected","Home"]),e(["div","nav-item","Menu"]),e(["div","nav-item","Contact"])],l=[e(["div","main-heading","Billy's Diner"]),e(["div","nav-items"],n)],c=e(["div","nav-bar"],l);t.appendChild(c),document.querySelectorAll(".nav-item").forEach((e=>{e.addEventListener("click",(t=>{document.querySelector(".selected").classList.remove("selected"),e.classList.add("selected")}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFBZ0IsU0FBU0MsRUFBU0MsR0FDcEMsSUFBSUMsRUFBVUYsRUFBUSxHQUNsQkcsRUFBY0gsRUFBUSxHQUN0QkksRUFBV0osRUFBUSxHQUVuQkssRUFBT0MsU0FBU1AsY0FBY0csR0FvQmxDLE9BbEJtQkssTUFBZkosSUFDQUEsRUFBY0EsRUFBWUssTUFBTSxLQUNoQ0wsRUFBWU0sU0FBUUMsSUFDaEJMLEVBQUtNLFVBQVVDLElBQUlGLE9BR1hILE1BQVpILElBQ0FDLEVBQUtRLFlBQWNULEdBR0pHLE1BQWZOLEdBQ0FBLEVBQVlRLFNBQVFLLElBQ2hCVCxFQUFLVSxZQUFZRCxNQUl6QkUsUUFBUUMsSUFBSVosR0FFTEEsR0N2QkxhLEVBQWdCWixTQUFTYSxjQUFjLFlBRXZDQyxFQUFtQixDQUNyQnJCLEVBQWMsQ0FBQyxNQUFPLG9CQUFxQixTQUMzQ0EsRUFBYyxDQUFDLE1BQU8sV0FBWSxTQUNsQ0EsRUFBYyxDQUFDLE1BQU8sV0FBWSxhQUdoQ3NCLEVBQWlCLENBQ25CdEIsRUFBYyxDQUFDLE1BQU8sZUFBZ0Isa0JBQ3RDQSxFQUFjLENBQUMsTUFBTyxhQUFjcUIsSUFHbENFLEVBQVN2QixFQUFjLENBQUMsTUFBTyxXQUNqQ3NCLEdBR0pILEVBQWNILFlBQVlPLEdBRVRoQixTQUFTaUIsaUJBQWlCLGFBRWxDZCxTQUFRSixJQUNiQSxFQUFLbUIsaUJBQWlCLFNBQVNDLElBQ1puQixTQUFTYSxjQUFjLGFBQzdCUixVQUFVZSxPQUFPLFlBRTFCckIsRUFBS00sVUFBVUMsSUFBSSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24oaXRlbUFyciwgY2hpbGRyZW5BcnIpIHtcbiAgICBsZXQgaXRlbVRhZyA9IGl0ZW1BcnJbMF07XG4gICAgbGV0IGl0ZW1DbGFzc2VzID0gaXRlbUFyclsxXTtcbiAgICBsZXQgaXRlbVRleHQgPSBpdGVtQXJyWzJdO1xuXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0ZW1UYWcpO1xuXG4gICAgaWYgKGl0ZW1DbGFzc2VzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpdGVtQ2xhc3NlcyA9IGl0ZW1DbGFzc2VzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgaXRlbUNsYXNzZXMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpdGVtVGV4dCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IGl0ZW1UZXh0O1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbkFyciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2hpbGRyZW5BcnIuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coaXRlbSlcblxuICAgIHJldHVybiBpdGVtO1xufTtcblxuZXhwb3J0IHtcbiAgICBjcmVhdGVFbGVtZW50XG59OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2NyZWF0ZUVsZW1lbnQuanMnO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb25zdCBuYXZJdGVtc0NoaWxkcmVuID0gW1xuICAgIGNyZWF0ZUVsZW1lbnQoW1wiZGl2XCIsIFwibmF2LWl0ZW0gc2VsZWN0ZWRcIiwgXCJIb21lXCJdKSxcbiAgICBjcmVhdGVFbGVtZW50KFtcImRpdlwiLCBcIm5hdi1pdGVtXCIsIFwiTWVudVwiXSksXG4gICAgY3JlYXRlRWxlbWVudChbXCJkaXZcIiwgXCJuYXYtaXRlbVwiLCBcIkNvbnRhY3RcIl0pXG5dXG5cbmNvbnN0IG5hdkJhckNoaWxkcmVuID0gW1xuICAgIGNyZWF0ZUVsZW1lbnQoW1wiZGl2XCIsIFwibWFpbi1oZWFkaW5nXCIsIFwiQmlsbHkncyBEaW5lclwiXSksXG4gICAgY3JlYXRlRWxlbWVudChbXCJkaXZcIiwgXCJuYXYtaXRlbXNcIl0sIG5hdkl0ZW1zQ2hpbGRyZW4pXG5dXG5cbmNvbnN0IG5hdkJhciA9IGNyZWF0ZUVsZW1lbnQoW1wiZGl2XCIsIFwibmF2LWJhclwiXSwgXG4gICAgbmF2QmFyQ2hpbGRyZW4pO1xuXG5cbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1pdGVtXCIpO1xuXG5uYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfSk7XG59KTtcblxuXG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiaXRlbUFyciIsImNoaWxkcmVuQXJyIiwiaXRlbVRhZyIsIml0ZW1DbGFzc2VzIiwiaXRlbVRleHQiLCJpdGVtIiwiZG9jdW1lbnQiLCJ1bmRlZmluZWQiLCJzcGxpdCIsImZvckVhY2giLCJjIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJjaGlsZCIsImFwcGVuZENoaWxkIiwiY29uc29sZSIsImxvZyIsIm1haW5Db250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwibmF2SXRlbXNDaGlsZHJlbiIsIm5hdkJhckNoaWxkcmVuIiwibmF2QmFyIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==