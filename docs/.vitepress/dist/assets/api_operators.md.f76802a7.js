import{o as n,c as s,a}from"./app.eed7cc6e.js";const t='{"title":"Operators","description":"","frontmatter":{},"headers":[{"level":2,"title":"setRef","slug":"setref"},{"level":2,"title":"mapError","slug":"maperror"},{"level":2,"title":"pipeUntil","slug":"pipeuntil"},{"level":2,"title":"untilUnmounted","slug":"untilunmounted"}],"relativePath":"api/operators.md","lastUpdated":1616488950278}',p={},o=a('<h1 id="operators"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h1><p><code>vuse-rx</code> also includes some operators that may come in handy when working with Vue.</p><p><div class="table-of-contents"><ul><li><a href="#setref">setRef</a></li><li><a href="#maperror">mapError</a></li><li><a href="#pipeuntil">pipeUntil</a></li><li><a href="#untilunmounted">untilUnmounted</a></li></ul></div></p><h2 id="setref"><a class="header-anchor" href="#setref" aria-hidden="true">#</a> <code>setRef</code></h2><div class="language-ts"><pre><code><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>ref<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> MonotypeOperatorFunction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><p>Sets a ref&#39;s value to current observable value.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> setRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuse-rx&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">from</span><span class="token punctuation">(</span><span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token comment">// sets result of the promise to `result`</span>\n  <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">setRef</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token comment">// equivalent to</span>\n  <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">tap</span><span class="token punctuation">(</span>value <span class="token operator">=&gt;</span> result<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>Can be used in tandem with <a href="/api/refs.html#syncref"><code>syncRef</code></a>:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> setRef<span class="token punctuation">,</span> syncRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuse-rx&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;some string to display to the user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">displayValue</span> <span class="token operator">=</span> value <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">New value is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">from</span><span class="token punctuation">(</span><span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token comment">// sets result of the promise to `result`</span>\n  <span class="token comment">// but processed using display logic</span>\n  <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">setRef</span><span class="token punctuation">(</span><span class="token function">syncRef</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">from</span><span class="token operator">:</span> displayValue <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// wait for ref update</span>\n<span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// after observable emits:</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//&gt; New value is 42</span>\n</code></pre></div><h2 id="maperror"><a class="header-anchor" href="#maperror" aria-hidden="true">#</a> <code>mapError</code></h2><p>Same as <code>map</code> in rxjs, but interacts with the <code>error</code> value of an observable.<br> Accepts a callback similar to that of regular <code>map</code>.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> tap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs/operators&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> mapError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuse-rx&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">from</span><span class="token punctuation">(</span><span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;42&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n    <span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function-variable function">error</span><span class="token operator">:</span> error <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;type of the error is&#39;</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span> error<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">mapError</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function-variable function">error</span><span class="token operator">:</span> error <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;type of the error is&#39;</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span> error<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function-variable function">error</span><span class="token operator">:</span> error <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;error value is&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function-variable function">error</span><span class="token operator">:</span> e <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// After promise rejects:</span>\n<span class="token comment">//&gt; type of the error is string</span>\n<span class="token comment">//&gt; type of the error is number</span>\n<span class="token comment">//&gt; error value is 42</span>\n<span class="token comment">//&gt; 42</span>\n</code></pre></div><h2 id="pipeuntil"><a class="header-anchor" href="#pipeuntil" aria-hidden="true">#</a> <code>pipeUntil</code></h2><div class="language-ts"><pre><code><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>hook<span class="token operator">:</span> VueHook<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> RxOperator<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><p>Creates an operator that halts the observable when a Vue hook is activated.<br> Only works for the component it is called within.</p><h2 id="untilunmounted"><a class="header-anchor" href="#untilunmounted" aria-hidden="true">#</a> <code>untilUnmounted</code></h2><div class="language-ts"><pre><code><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>obs<span class="token operator">:</span> Observable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Observable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><p>Rx operator. Applies <code>pipeUntil</code> to an observable, shorthand for <code>obserable.pipe(pipeUntil(onUnmounted))</code>.</p>',18);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
