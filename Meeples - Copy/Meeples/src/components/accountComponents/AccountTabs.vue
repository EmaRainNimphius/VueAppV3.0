<script setup>
import JournalTable from "@/components/accountComponents/JournalTable.vue";
import MeepleTable from "@/components/accountComponents/MeepleTable.vue";
</script>

<template>
  <!-- tabs and their info -->
  <div class="container mb-5">
    <div class="row">

      <div class="col-12">

        <div class="row" id="break"></div>
          <!-- tabs : meeples / journal -->
          <ul class="nav nav-tabs mt-5">
            <div class="col-6">
              <li class="nav-item"><a class="nav-link fs-2 active" href="#meeple" data-bs-toggle="tab">Meeples</a></li>
            </div>
            <div class="col-6">
              <li class="nav-item"><a class="nav-link fs-2" href="#journal" data-bs-toggle="tab">Journal</a></li>
            </div>
          </ul>

          <!-- meeples tab content-->
          <div class="tab-content">
            <div id="meeple" class="active tab-pane fade in show">
              <!-- meeple table info -->
              <MeepleTable/>
            </div>
          </div>
        </div>

        <!-- journal tab content -->
        <div class="tab-content">
          <div id="journal" class="tab-pane fade">
            <!-- journal table info -->
            <JournalTable/>
          </div>
        </div>

      </div>
    </div>

</template>

<style lang="sass" scoped>
// importing personal scss
@import "../src/scss/_variables.scss"

.nav-link
  color: $blu-dark
.nav-tabs .nav-link.active
  background-color: $blu-dark
  color: $text-light
.nav-tabs .nav-link
  border-color: $blu-dark


</style>