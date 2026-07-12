<script>
  // @ts-nocheck
  // Sensibilité / spécificité vs valeurs prédictives. Se et Sp sont INTRINSÈQUES au test ;
  // la VPP et la VPN, elles, dépendent de la PRÉVALENCE. On applique le test à 1000 sujets
  // et on lit le tableau 2×2 : à Se et Sp constantes, faire chuter la prévalence effondre
  // la VPP — c'est le piège du dépistage d'une maladie rare.
  let se = 0.95;   // sensibilité
  let sp = 0.95;   // spécificité
  let prev = 0.10; // prévalence
  const N = 1000;

  $: malades = Math.round(N * prev);
  $: sains = N - malades;
  $: VP = Math.round(malades * se);
  $: FN = malades - VP;
  $: VN = Math.round(sains * sp);
  $: FP = sains - VN;
  $: VPP = VP + FP > 0 ? VP / (VP + FP) : 0;
  $: VPN = VN + FN > 0 ? VN / (VN + FN) : 0;
  // rapports de vraisemblance
  $: LRplus = sp < 1 ? se / (1 - sp) : Infinity;
  $: LRmoins = sp > 0 ? (1 - se) / sp : 0;
  $: vppFaible = VPP < 0.5;

  const pct = (x) => (x * 100).toFixed(x < 0.1 ? 1 : 0) + ' %';
</script>

<div class="viz">
  <table class="tab">
    <thead>
      <tr><th></th><th>Malade</th><th>Sain</th><th>Total</th></tr>
    </thead>
    <tbody>
      <tr>
        <th>Test +</th>
        <td class="vp">{VP}<span>vrais +</span></td>
        <td class="fp">{FP}<span>faux +</span></td>
        <td class="tot">{VP + FP}</td>
      </tr>
      <tr>
        <th>Test −</th>
        <td class="fn">{FN}<span>faux −</span></td>
        <td class="vn">{VN}<span>vrais −</span></td>
        <td class="tot">{FN + VN}</td>
      </tr>
      <tr class="totrow"><th>Total</th><td>{malades}</td><td>{sains}</td><td>{N}</td></tr>
    </tbody>
  </table>

  <div class="stats">
    <span class="pill fix">Se = {pct(se)}</span>
    <span class="pill fix">Sp = {pct(sp)}</span>
    <span class="pill vpp" class:bad={vppFaible}>VPP = {pct(VPP)}</span>
    <span class="pill vpn">VPN = {pct(VPN)}</span>
    <span class="pill lr">LR+ = {LRplus === Infinity ? '∞' : LRplus.toFixed(1)}</span>
    <span class="pill lr">LR− = {LRmoins.toFixed(2)}</span>
  </div>

  {#if vppFaible}
    <p class="alert">⚠ La VPP est inférieure à 50 % : <strong>la majorité des tests positifs sont des faux positifs</strong>. Un résultat positif impose un test de confirmation.</p>
  {/if}

  <div class="controls">
    <label>Sensibilité (Se) <span>{pct(se)}</span>
      <input type="range" min="0.5" max="1" step="0.01" bind:value={se} /></label>
    <label>Spécificité (Sp) <span>{pct(sp)}</span>
      <input type="range" min="0.5" max="1" step="0.01" bind:value={sp} /></label>
    <label>Prévalence <span>{pct(prev)}</span>
      <input type="range" min="0.001" max="0.6" step="0.001" bind:value={prev} /></label>
  </div>
  <p class="hint">Laissez Se et Sp à 95 % (un excellent test) et faites <strong>descendre la prévalence</strong> : à 1 ‰, la VPP s'effondre sous 2 % — presque tous les positifs sont faux. Se et Sp ne bougent pas : elles sont <strong>intrinsèques</strong> au test. Seules la VPP et la VPN dépendent de la population testée. C'est tout l'enjeu du dépistage de masse.</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius, 8px); padding: var(--space-4); background: var(--bg-tertiary); }
  .tab { width: 100%; border-collapse: collapse; font-size: var(--text-sm); }
  .tab th, .tab td { border: 1px solid var(--border-subtle); padding: var(--space-2); text-align: center; }
  .tab thead th { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-secondary); }
  .tab tbody th { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-secondary); text-align: left; }
  .tab td { font-weight: 700; font-size: var(--text-lg); }
  .tab td span { display: block; font-weight: 400; font-size: 9px; color: var(--text-muted); font-family: var(--font-mono); }
  .vp, .vn { background: color-mix(in srgb, var(--accent-pk) 15%, transparent); }
  .fp, .fn { background: color-mix(in srgb, #c0392b 12%, transparent); }
  .tot, .totrow td, .totrow th { color: var(--text-muted); font-weight: 400; background: var(--bg-secondary); }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: var(--bg-secondary); color: var(--text-secondary); }
  .pill.fix { border: 1px dashed var(--border-strong); }
  .pill.vpp { background: color-mix(in srgb, var(--accent-pk) 16%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.vpp.bad { background: color-mix(in srgb, #c0392b 15%, var(--bg-primary)); color: #c0392b; }
  .pill.vpn { background: color-mix(in srgb, var(--accent-ai) 15%, var(--bg-primary)); color: var(--accent-ai); font-weight: 700; }
  .pill.lr { color: var(--text-muted); }
  .alert { font-size: var(--text-xs); color: #c0392b; text-align: center; margin: 0 0 var(--space-2); }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--space-2) var(--space-4); margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; line-height: 1.55; }
</style>
